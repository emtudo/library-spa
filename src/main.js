import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import http from '@/support/http.js'

import './index.css'

const app = createApp(App)
app.config.globalProperties.$http = http

app.use(router)
app.mount('#app')
