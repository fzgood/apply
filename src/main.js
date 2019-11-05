import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import './common/styles/theme.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

 function jumpPage(page, query = {}){
  router.push({
    path: page,
    query: query
  })
};

router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
  console.log(to);
  store.commit('updatePageNav', to.meta.pageNav)
  store.commit('updatePageTitle', to.meta.pageTitle)
  if(to.path != '/' && !localStorage.getItem('openId')){
    location.replace(`/pay/?shopNo=${to.query.id}`);
  }
  next()//执行进入路由，如果不写就不会进入目标页

})
Vue.prototype.jumpPage = jumpPage;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
