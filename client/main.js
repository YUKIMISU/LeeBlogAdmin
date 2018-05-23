import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import createRouter from './router/index'

import './assets/images/bg.jpeg'
import './assets/styles/test.styl'
Vue.use(VueRouter)
Vue.use(iView)
const router = createRouter()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
