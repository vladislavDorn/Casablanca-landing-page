import Vue from 'vue'
import Casablanca from './pages/Casablanca.vue'
import router from './router'
import './scss/style.scss'
import './scss/responsive.scss'

new Vue({
  el: '#app',
  render: h => h(Casablanca)
})
