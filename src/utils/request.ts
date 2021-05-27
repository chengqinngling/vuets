
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Message, Notification } from "@/utils/message"
import qs from 'qs';
//顶部请求状态栏


export class Request {
    public static axiosInstance: AxiosInstance;

    public static init() {
        // 创建axios实例
        this.axiosInstance = axios.create({
            baseURL: process.env.VUE_APP_CURRENTMODE === 'dev-remote' ? '/api' : 'http://localhost:8080/',
            timeout: 6000
        });
        // 初始化拦截器
        this.initInterceptors();
        return axios;
    }

    // 初始化拦截器
    public static initInterceptors() {
        // 设置post请求头
        this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        /**
         * 请求拦截器
         * 每次请求前，如果存在token则在请求头中携带token
         */
        this.axiosInstance.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                removePending(Option) // 在请求开始前，对之前的请求做检查取消操作
                addPending(Option) // 将当前请求添加到 pending 中
                // const token = Vue.ls.get(ACCESS_TOKEN)
                // if (token) {
                //     config.headers['Authorization'] = 'Bearer ' + token
                // }

                // 登录流程控制中，根据本地是否存在token判断用户的登录情况
                // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
                // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
                const token = JSON.parse(sessionStorage.getItem('state') as string).ACCESS_TOKEN;
                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            (error: any) => {
                Message({ "msg": "用户认证失败，请重新登陆" })
            },
        );


        // 响应拦截器
        this.axiosInstance.interceptors.response.use(

            // 请求成功
            (response: AxiosResponse) => {
                removePending(response) // 在请求结束后，移除本次请求
                if (response.status === 200) {
                    return response.data;
                } else {
                    Request.errorHandle(response);
                    return response.data;
                }
            },
            // 请求失败
            (error: any) => {
                removePending(error) // 在请求结束后，移除本次请求
                const { response } = error;
                if (response) {
                    // 请求已发出，但是不在2xx的范围
                    Request.errorHandle(response);
                    return Promise.reject(response.data);
                } else {
                    // 处理断网的情况
                    // eg:请求超时或断网时，更新state的network状态
                    // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
                    // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
                    Message({ "msg": "网络连接异常" })


                }
            });
    }


    /**
     * http握手错误
     * @param res 响应回调,根据不同响应进行不同操作
     */
    private static errorHandle(res: any) {
        // 状态码判断
        switch (res.status) {
            case 401:
            case 403:
            case 404:
                Message({ "msg": "请求的资源不存在" })
                break;
            default:
                Message({ "msg": "连接错误" })
        }
    }
}

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pending = new Map()
/**
 * 添加请求
 * @param {Object} config 
 */
const addPending = (config: any) => {
    const url = [
        config.method,
        config.url,
        qs.stringify(config.params),
        qs.stringify(config.data)
    ].join('&')
    config.cancelToken = config.cancelToken || new axios.CancelToken(cancel => {
        if (!pending.has(url)) { // 如果 pending 中不存在当前请求，则添加进去
            pending.set(url, cancel)
        }
    })
}
/**
 * 移除请求
 * @param {Object} config 
 */
const removePending = (config: any) => {
    const url = [
        config.method,
        config.url,
        qs.stringify(config.params),
        qs.stringify(config.data)
    ].join('&')
    if (pending.has(url)) { // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
        const cancel = pending.get(url)
        cancel(url)
        pending.delete(url)
    }
}
/**
 * 清空 pending 中的请求（在路由跳转时调用）
 */
export const clearPending = () => {
    for (const [url, cancel] of pending) {
        cancel(url)
    }
    pending.clear()
}