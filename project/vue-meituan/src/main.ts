import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import './assets/reset.css'
import router from './router/index.ts'


const app = createApp(App)
app
    .use(router)
    .mount('#app')
