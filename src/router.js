import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        pageTitle: "首页",
        pageNav: "custom"
      },
      component: () => import(/* webpackChunkName: "about" */ './views/home.vue')
    },
    {
      path: '/product',
      name: 'product',
      meta: {
        pageTitle: "商品详情"
      },
      component: () => import(/* webpackChunkName: "about" */ './views/product.vue')
    },{
      path: '/apply',
      name: 'apply',
      meta: {
        pageTitle: "商品购买"
      },
      component: () => import(/* webpackChunkName: "about" */ './views/apply.vue')
    },{
      path: '/success',
      name: 'success',
      meta: {
        pageTitle: "购买成功",
        pageNav: "custom"
      },
      component: () => import(/* webpackChunkName: "about" */ './views/success.vue')
    }
  ]
})
