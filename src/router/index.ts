import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/Index.vue'

import Home from '@/views/Home.vue'

//系统设置
import UserSettings from "@/views/components/systemSettings/User.vue"
import AuthoritySettings from "@/views/components/systemSettings/Authority.vue"

//直播设置
import Channel from "@/views/components/broadcast/Channel.vue"
import Mpts from "@/views/components/broadcast/Mpts.vue"

//文件资源管理
import Video from "@/views/components/fileManagement/Video.vue"
import Folder from "@/views/components/fileManagement/Folder.vue"

//终端管理
//终端授权
import Authorization from '@/views/components/terminal/Authorization.vue'
//套餐订购
import PackageOrder from '@/views/components/terminal/PackageOrder.vue'
//节目套餐管理
import ProgramPackage from '@/views/components/terminal/ProgramPackage.vue'
//终端区域管理
import TerminalArea from '@/views/components/terminal/TerminalArea.vue'



import parentNode from "@/views/404.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
          {
            path: '/',
            name: 'UserSettings',
            component: UserSettings,
          },
          {
            path: '/AuthoritySettings',
            name: 'AuthoritySettings',
            component: AuthoritySettings,
          },
          {
            path: '/Channel',
            name: 'Channel',
            component: Channel,
          },
          {
            path: '/Mpts',
            name: 'Mpts',
            component: Mpts,
          },
          {
            path: '/Video',
            name: 'Video',
            component: Video,
          },
          {
            path: '/Folder',
            name: 'Folder',
            component: Folder,
          },
          {
            path: '/Authorization',
            name: 'Authorization',
            component: Authorization,
          },
          {
            path: '/PackageOrder',
            name: 'PackageOrder',
            component: PackageOrder,
          },
          {
            path: '/ProgramPackage',
            name: 'ProgramPackage',
            component: ProgramPackage,
          },
          {
            path: '/TerminalArea',
            name: 'TerminalArea',
            component: TerminalArea,
          },
        ]
      }
    ]
  },
  {
    path: "/*",
    name: "notFound",
    component: parentNode,  // 引入 组件
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
