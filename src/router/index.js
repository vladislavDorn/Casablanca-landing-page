import Vue from 'vue'
import Router from 'vue-router'
import Casablanca from '../pages/Casablanca.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Casablanca',
      component: Casablanca,
    }
  ]
})
