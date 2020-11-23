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
      path: '/edit-suggestion/:id',
      name: 'EditSuggestion',
      component: () => import('@/components/SuggestionsEdit')
    },
    {
      path: '/show-suggestion/:id',
      name: 'ShowSuggestion',
      component: () => import('@/components/SuggestionsDetails')
    },
    {
      path: '/edit-experience/:id',
      name: 'EditExperience',
      component: () => import('@/components/ExperienceEdit')
    },
    {
      path: '/show-experience/:id',
      name: 'ShowExperience',
      component: () => import('@/components/ExperienceDetails')
    }
  ],
  mode: 'history'
})


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.fullPath === '/dashboard' || to.name === 'EditSuggestion' || to.name === 'ShowSuggestion' || to.name === 'EditExperience' || to.name === 'ShowExperience') {
    if (!token) {
      next('/login');
    }
  }
  if (to.fullPath === '/login') {
    if (token) {
      next('/dashboard');
    }
  }
  next();
})

export default router;
