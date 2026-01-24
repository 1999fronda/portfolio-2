import './assets/css/main.css'

import { createApp } from 'vue'
import router from './router'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(ui)

app.mount('#app')
