import { createRouter, createWebHistory } from 'vue-router'
import MasterLayout from '../layouts/MasterLayout.vue'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Categories from '../views/Categories.vue'

const routes = [
  {
    path: '/',
    component: MasterLayout,
    children: [
      { path: '', component: Home },
      { path: 'products', component: Products },
      { path: 'categories', component: Categories },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router