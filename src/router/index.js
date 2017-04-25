import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
