import {createRouter, createWebHistory} from 'vue-router'
import Register from '@/views/Register'
import Login from '@/views/Login'
import GlobalFeed from '@/views/GlobalFeed'
import YourFeed from '@/views/YourFeed'


const routes = [
  {
    path: '/globFeed',
    name: 'globFeed',
    component: GlobalFeed
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/yourFeed',
    name: 'TwYourFeed',
    component: YourFeed
  },
  {
    path: '/order',
    name: 'order',
    component: GlobalFeed
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
