import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

const http = axios.create({
	baseURL:'http://localhost:3000/'
})

const app = createApp(App)
app.config.globalProperties.$http = http
app.use(ElementPlus)
app.use(router)
app.mount('#app')
