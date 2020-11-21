import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

Vue.use(Router)

const router =  new Router({
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
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/components/TheDashboard')
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: () => import('@/components/SuggestionsEdit')
    },
    {
      path: '/show/:id',
      name: 'Show',
      component: () => import('@/components/SuggestionsDetails')
    }
  ],
  mode: 'history'
})


router.beforeEach((to, from, next) => {
  if (to.fullPath === '/dashboard' || to.name === 'Edit' || to.name === 'Show') {
    if (!store.state.user) {
      next('/login');
    }
  }
  if (to.fullPath === '/login') {
    if (store.state.user) {
      next('/dashboard');
    }
  }
  next();
})

export default router;