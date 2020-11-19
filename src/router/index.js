import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/TheHome')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/TheLogin')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('@/components/TheSignup')
    },
    {
      path: '/help',
      name: 'Help',
      component: () => import('@/components/TheHelp')
    }
  ],
  mode: 'history'
})
