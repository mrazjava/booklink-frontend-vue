import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  name: 'Store',
  state: {
    token: localStorage.getItem('token') || '',
    user: 'Detective Bookworm'
  },

  mutations: {

    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },

  },

  actions: {

    login({commit}, payload){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        //axios({url: this._vm.$BEHOST + '/rest/v1/auth/login', data: payload, method: 'POST' })
        axios.patch(this._vm.$BEHOST + '/rest/v1/auth/login', payload)
        .then(resp => {
          const token = resp.data
          const user = payload.email
          console.log('token: ' + token)
          //console.log('user: ' + user)
          localStorage.setItem('token', token)
          //localStorage.setItem('user', user)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },

  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})
