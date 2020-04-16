import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const KEY_TOKEN = 'auth-token'
export const KEY_USER = 'user'
const DEFAULT_USER = 'Detective Bookworm'

export default new Vuex.Store({
  name: 'Store',
  state: {
    status: '',
    token: localStorage.getItem(KEY_TOKEN) || '',
    user: localStorage.getItem(KEY_USER) || DEFAULT_USER
  },

  mutations: {

    auth_request(state){
      state.status = 'loading'
      state.user = 'signing in ...'
    },
    auth_success(state, result){
      state.status = 'success'
      state.token = result[KEY_TOKEN]
      state.user = result[KEY_USER]
    },
    auth_user(state, user) {
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
      state.user = DEFAULT_USER
    },
  },

  actions: {

    login({commit}, payload){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        //axios({url: this._vm.$BEHOST + '/rest/v1/auth/login', data: payload, method: 'POST' })
        axios.patch(this._vm.$BEHOST + '/rest/v1/auth/login', payload)
        .then(resp => {
          const result = {}
          result[KEY_TOKEN] = resp.data.token
          result[KEY_USER] = resp.data.firstName + ' ' + resp.data.lastName
          localStorage.setItem(KEY_TOKEN, result[KEY_TOKEN])
          localStorage.setItem(KEY_USER, result[KEY_USER])
          axios.defaults.headers.common['Authorization'] = result[KEY_TOKEN]
          commit('auth_success', result)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem(KEY_TOKEN)
          localStorage.removeItem(KEY_USER)
          Vue.notify({
            group: 'api',
            title: '/rest/v1/auth/login',
            type: 'error',
            text: err + "<br/>" + err.response.data.description
          });
          reject(err)
        })
      })
    },
    logout({commit}){
      return new Promise(() => {
        commit('logout')
        localStorage.removeItem(KEY_TOKEN)
        localStorage.removeItem(KEY_USER)
        delete axios.defaults.headers.common['Authorization']
        window.location.reload()
      })
    }
  },

  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    userName: state => state.user,
  }
})
