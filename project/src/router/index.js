import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import register from '../views/Register.vue'
import reset from '../views/ResetPassword.vue'
import login from '../views/Login.vue'
import csv from '../views/Importcsv.vue'
import adddata from '../views/AddData.vue'
import searchby from '../views/QueryData.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/register',
      name: 'register',
      component: register
    },
    {
      path:'/resetpassword',
      name:'resetpassword',
      component:reset

    },
    {
    path:'/login',
    name: 'login',
    component: login
    },
    {
      path:'/import',
      name: 'import',
      component: csv
    },
    {
      path:'/add',
      name: 'add',
      component: adddata
    },
    {
      path:'/query',
      name: 'query',
      component: searchby
    }

  ]
})

export default router
