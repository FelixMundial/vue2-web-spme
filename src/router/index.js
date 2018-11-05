import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import About from '@/components/About'
import ExTech from '@/components/ExTech'
import Page404 from '@/components/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/extech',
      name: 'ExTech',
      component: ExTech
    },
    {
      path: '',
      name: '404',
      component: Page404
    }
  ]
})
