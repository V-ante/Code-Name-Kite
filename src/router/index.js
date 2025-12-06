import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import HelloWorld from '../components/HelloWorld.vue'
import HandsomeL from '../views/HandsomeL.vue'
import HandsomeF from '../views/HandsomeF.vue'
import HandsomeY from '../views/HandsomeY.vue'
import HandsomeS from '../views/HandsomeS.vue'
import HandsomeZ from '../views/HandsomeZ.vue'
import MiTan from '../views/MiTan.vue'
import MyView from '../views/MyView.vue'
// 这个地方from后面的内容千万别写错了

// 配置路径
//修改文件名后必须重新运行
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
	path:'/user',
	name:'user',
	component: HelloWorld
  },
  {
	path:'/Liu',
	name:'Liu',
	component: HandsomeL
  },
  {
	path:'/Fu',
	name:'Fu',
	component: HandsomeF
  },
  {
	path:'/Yuan',
	name:'Yuan',
	component: HandsomeY
  },
  {
	path:'/Sun',
	name:'Sun',
	component: HandsomeS
  },
  {
	path:'/Zuo',
	name:'Zuo',
	component: HandsomeZ
  },
  {
	path:'/Mi',
	name:'Mi',
	component: MiTan
  },
  {
	path:'/my',
	name:'my',
	component: MyView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
