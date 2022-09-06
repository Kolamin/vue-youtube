import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta:{layout:'empty'},
    component: ()=> import('@/views/Login.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {layout: 'main'},
    component: ()=> import('@/views/Categories.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    meta: {layout: 'main'},
    component: ()=> import('@/views/Detail.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: {layout: 'main'},
    component: ()=> import('@/views/History.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {layout: 'main'},
    component: ()=> import('@/views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main'},
    component: ()=> import('@/views/Profile.vue')
  },
  {
    path: '/record',
    name: 'record',
    meta: {layout: 'main'},
    component: ()=> import('@/views/Record.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'main'},
    component: ()=> import('@/views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
