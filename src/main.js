import Vue from 'vue'
import Casablanca from './pages/Casablanca.vue'
import router from './router'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import './scss/style.scss'
import './scss/responsive.scss'

new Vue({
  el: '#app',
  render: h => h(Casablanca)
})
