import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Publications from '@/components/Publications'
import Members from '@/components/Members'
import About from '@/components/About'
import ExTech from '@/components/ExTech'
import ExTechRegister from '@/components/ExTechRegister'
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
      path: '/publications',
      name: 'Publications',
      component: Publications
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
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
      path: '/extech/register',
      name: 'ExTechRegister',
      component: ExTechRegister
    },
    {
      path: '',
      name: '404',
      component: Page404
    }
  ]
})
