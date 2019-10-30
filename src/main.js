import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import './common/styles/theme.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;


router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
  store.commit('updatePageNav', to.meta.pageNav)
  store.commit('updatePageTitle', to.meta.pageTitle)
  next()//执行进入路由，如果不写就不会进入目标页
})
Vue.prototype.jumpPage = function(page){
  router.push({ path: page})
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
