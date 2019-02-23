import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'

import Game from './components/Game.vue'
import Overthrone from './components/Overthrone.vue'
import GGJ19 from './components/GGJ19.vue'
import Shape_Escape from './components/Shape_Escape.vue';
import About from './components/About.vue'

Vue.use(Router)
Vue.use(VueHead)

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
    },
    {
      path: '/Shape_Escape',
      name: 'Shape Escape',
      component: Shape_Escape
    },
  ]
})