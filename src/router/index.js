import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MyViewVue from '../views/MyView.vue'
import HelloWorld from '../components/HelloWorld.vue'
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
	path:'/my',
	name:'my',
	component: MyViewVue
  },
  {
	path:'/user',
	name:'user',
	component: HelloWorld
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
