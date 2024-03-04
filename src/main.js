import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// main.js/ts
import {createBootstrap} from 'bootstrap-vue-next'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'



createApp(App).use(router).mount('#app')
App.use(createBootstrap()) // Important

