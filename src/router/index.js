import { createRouter, createWebHashHistory } from 'vue-router'
// import Login from '@/views/login'

const routes = [
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/login')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home')
  },
  {
    path: '/messagelogin',
    name: 'Messagelogin',
    component: () => import('@/views/login/loginAll/messagelogin')
  },
  {
    path: '/forgetpassword',
    name: 'ForgetPassword',
    component: () => import('@/views/login/loginAll/forgetpassword')
  },
  {
    path: '/regist',
    name: 'Regist',
    component: () => import('@/views/login/loginAll/regist')
  }

  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
