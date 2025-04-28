import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入 normalize
import 'normalize.css'
// 导入自定义的公共样式
import '@/assets/styles/common.less'
// 导入路由
import router from './router/index'
// 导入复用组件
import plugin from "./components/index";
// 导入 pinia
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'


let pinia = createPinia()



createApp(App).use(vue3GoogleLogin, {
    clientId: '1050158055435-m19v9rlk5kfsrposl17r7kkgj4uu968e.apps.googleusercontent.com'
})
    .use(router).use(ElementPlus)
    .use(pinia)
    .use(plugin)
    .mount('#app')
