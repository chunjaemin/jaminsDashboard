import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'



createApp(App)
.use(router)
.use(store)
.use(PerfectScrollbar)
.mount('#app')
