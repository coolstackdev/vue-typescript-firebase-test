import Vue from 'vue'
import VueRouter from  'vue-router'
import Slider from './pages/slider.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: { name: 'slider' }
  },
  {
    path: '/slider/:id',
    name: 'slider',
    component: Slider
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router