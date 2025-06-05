import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import './assets/base.css'
import router from './router/index.ts'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app
    .use(router)
    .use(pinia)
    .mount('#app')
