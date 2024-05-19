import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import Categories from '../views/Categories.vue';

import EditarCategoria from '../components/Categoria/EditarCategoria.vue';
import NewCategoria from '../components/Categoria/NewCategoria.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories
  },
  {
    path: '/editar-categoria/:id',
    name: 'EditarCategoria',
    component: EditarCategoria
  },
  {
    path: '/add-categoria/',
    name: 'NewCategoria',
    component: NewCategoria
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
