import Vue from 'vue'
import Router from 'vue-router'
import Game from './components/Game.vue'
//import Skills from './components/Skills.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: About
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    }
  ]
})