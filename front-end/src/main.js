import {createApp} from 'vue'
import {router} from "./router/router.js";
import './style.css'
import App from './App.vue'

const app = createApp(App)

//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)

app.mount('#app')
