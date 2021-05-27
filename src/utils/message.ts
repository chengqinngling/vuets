import { ElMessage, ElNotification } from 'element-plus';

const Message = ((msgData: any = {}) => {
    ElMessage({
        showClose: msgData.show || true,
        message: msgData.msg || "系统错误，联系管理员",
        type: msgData.type || "error",
        duration: msgData.duration || 2000
    });
})
const Notification = ((notiData: any = {}) => {
    ElNotification({
        showClose: notiData.show || true,
        message: notiData.msg || "系统错误，联系管理员",
        type: notiData.type || "error",
        duration: notiData.duration || 2000
    });
})

export {
    Message,
    Notification
}