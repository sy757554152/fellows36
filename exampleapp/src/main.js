import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 引入common.css  @ =>src文件夹
import '@/assets/css/common.scss'
import '@/assets/js/rem.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
