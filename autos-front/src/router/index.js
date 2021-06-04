import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Autos from '../views/autos/Autos.vue'
import AgregarAuto from '../views/autos/AgregarAuto.vue'

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
  {
    path: '/autos/agregar',
    name: 'AgregarAuto',
    component: AgregarAuto
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
