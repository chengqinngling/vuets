const requireAll = require.context('@/mock', false, /\.ts$/)

//requireAll.keys()为文件名数组; requireAll(apiName)获取文件暴露的内容
const apiArr = requireAll.keys().map(apiName => requireAll(apiName).default || requireAll(apiName))
//组合接口
const api = apiArr.reduce((prev, curr) => Object.assign(prev, curr), {})

export default api