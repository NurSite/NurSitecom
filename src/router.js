import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/quran', component: () => import('@/views/Quran.vue') },
  { path: '/profile', component: () => import('@/views/Profile.vue') }
  { path: '/', component: () => import('@/views/Home.vue') }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
