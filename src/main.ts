// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import VueI18n from '@/language'
// createApp(App)
//     .use(store)
//     .use(router)
//     .use(VueI18n)
//     .mount('#app')

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
//UI
import element from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// echarts
import * as echarts from 'echarts';

import { Request } from '@/utils/request';
import VueAxios from 'vue-axios'

import axios from 'axios'

import VueI18n from '@/language'

//条件引入模拟服务器 MockJS优先级高于域名代理 会导致远程API无法访问
//小心,Boolean('false')等于true 'false'不等于false
eval(process.env.VUE_APP_MOCK as string) && require('@/mock/api');
const app = createApp(App)

app.config.globalProperties.echarts = echarts;
app.config.globalProperties.$http = axios
app.use(element)
app.use(router)
app.use(VueI18n)
app.use(VueAxios, Request.init())
app.mount('#app')