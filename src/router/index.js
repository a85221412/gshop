import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRating from '../pages/Shop/ShopRating/ShopRating'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'


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
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        }, {
          path: '/shop/rating',
          component: ShopRating
        }, {
          path: '/shop/info',
          component: ShopInfo
        }, {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    },
    {
      path: '/',
      redirect: '/msite'
    },
  ]
})
