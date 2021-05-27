import {
    ElNotification
} from "element-plus"
class Element {
    // 构造函数
    // 删除状态码  200 成功 400失败 500 错误
    Notification(title = "提示", msg = "删除成功", type: any = "success") {
        ElNotification({
            title: title,
            message: msg,
            type: type,
            duration: 3000
        });
    }
}
export default Element