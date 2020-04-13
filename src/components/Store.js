import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  name: 'Store',
  state: {
    token: localStorage.getItem('token') || '',
    user : {}
  },

  mutations: {
  },

  actions: {
  },

  getters: {
  }
})
