import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showfooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showfooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showfooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showfooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
