import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Autos from '../views/autos/Autos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/autos',
    name: 'Autos',
    component: Autos
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
