import Vue from 'vue'
import App from './App.vue'
//import Game from './components/Game.vue'
import BootstrapVue from 'bootstrap-vue'
import jquery from 'jquery'
import router from './router'
import VueAnalytics from 'vue-analytics'
require('bootstrap')
require('jquery.easing')
require('bootstrap/dist/css/bootstrap.css')
require('devicons/css/devicons.css')
require('font-awesome/css/font-awesome.css')
require('./resume.css')


Vue.use(BootstrapVue)
Vue.prototype.jquery = jquery

Vue.config.productionTip = false

const isProd = (process.env.NODE_ENV === 'production')

Vue.use(VueAnalytics, {
  id: 'UA-134679341-1',
  router,
  debug: {
    enabled : !isProd,
    sendHitTask: isProd
  }
})


/* eslint-disable no-new */   
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})