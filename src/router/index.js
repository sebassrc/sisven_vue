import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Detalles from '../views/Detalles.vue';
import NewDetalle from '../components/Detalle/NewDetalle.vue';
import EditarDetalle from '../components/Detalle/EditarDetalle.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/detalles',
    name: 'detalles',
    component: Detalles
  },
  {
    path: '/editar-detalle/:id',
    name: 'EditarDetalle',
    component: EditarDetalle
  },
  {
    path: '/add-detalle',
    name: 'NewDetalle',
    component: NewDetalle
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
