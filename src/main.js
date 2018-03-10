// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//swiper
import '../node_modules/swiper/dist/css/swiper.min.css'
import './modules/filters.js'
//config
import config from './modules/config'
//store
import store from  './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
   data:{
      config
  },
  components: { App },
  store,
  template: '<App/>'
})
