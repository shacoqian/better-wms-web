import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  './components/use'
import store from './store'

import '@/assets/less/main.less'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
