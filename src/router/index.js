import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/cart')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile/profile')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/category/category')
  }
]

const router = new VueRouter({
  routes
})

export default router
