import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageTitle: '商品',
    pageNav: '',
    historyLength: 0
  },
  mutations: {
    updatePageTitle (state, data) {
      state.pageTitle = data
    },
    updatePageNav (state, data) {
      state.pageNav = data
    }
  },
  actions: {

  }
})
