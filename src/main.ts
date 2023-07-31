import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag'
import VueGtagConfig from '@/plugin/VueGtagConfig'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(VueGtag, VueGtagConfig)
  .mount('#app')
