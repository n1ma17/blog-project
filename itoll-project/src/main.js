import { createApp } from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import router from './router'
import store from './store'

import './style.css'
import App from './App.vue'

// createApp(App).use(VueAxios, axios)
createApp(App).use(router).use(store).mount('#app')
