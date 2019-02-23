import Vue from 'vue'
import Router from 'vue-router'
import Game from './components/Game.vue'
import Overthrone from './components/Overthrone.vue'
import GGJ19 from './components/GGJ19.vue'
//import Skills from './components/Skills.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/Games',
      name: 'Games',
      component: Game
    },
    {
      path: '/Overthrone',
      name: 'Overthrone',
      component: Overthrone
    },
    {
      path: '/GGJ19',
      name: 'GGJ19',
      component: GGJ19
    }
  ]
})