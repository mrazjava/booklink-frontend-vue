import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const KEY_USER = 'booklink-user'
const DEFAULT_USER = {
  firstName: 'Detective',
  lastName: 'Bookworm'
}

export default new Vuex.Store({
  name: 'Store',
  state: {
    status: '',
    user: DEFAULT_USER
  },

  mutations: {

    auth_request(state){
      state.status = 'loading'
    },
    auth_user(state, user) {
      state.user = user
    },
    auth_status(state, status){
      state.status = status
      state.user = DEFAULT_USER
    },
    logout(state){
      state.status = ''
      state.user = DEFAULT_USER
    },
  },

  actions: {

    login({commit}, payload){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios.patch(this._vm.$BEHOST + '/rest/v1/auth/login', payload)
        .then(resp => {
          var userData = resp.data
          localStorage.setItem(KEY_USER, JSON.stringify(userData))
          axios.defaults.headers.common['Authorization'] = userData.token
          commit('auth_status', 'success')
          commit('auth_user', userData)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_status', 'error')
          localStorage.removeItem(KEY_USER)
          Vue.notify({
            group: 'api',
            title: '/rest/v1/auth/login',
            type: 'error',
            text: err + (err.response ? "<br/>" + err.response.data.description : '')
          });
          reject(err)
        })
      })
    },
    logout({commit}){
      return new Promise(() => {
        commit('logout')
        localStorage.removeItem(KEY_USER)
        delete axios.defaults.headers.common['Authorization']
        window.location.reload()
      })
    }
  },

  getters: {
    isLoggedIn: state => !!state.user?.token,
    authStatus: state => state.status,
    userName: state => 'loading'.localeCompare(state.status) ? state.user.firstName + ' ' + state.user.lastName : 'signing in ...',
    userRoles: state => state.user?.roles
  }
})
