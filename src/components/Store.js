import Vue from 'vue'
import Vuex from 'vuex'

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
    auth_status(state, status) {
      state.status = status
      state.user = DEFAULT_USER
    },
    auth_logout(state) {
      state.status = ''
      state.user = DEFAULT_USER
    }
  },
  actions: {
  },
  getters: {
    isLoggedIn: state => !!state.user?.token,
    authStatus: state => state.status,
    userName: state => 'loading'.localeCompare(state.status) ? state.user.firstName + ' ' + state.user.lastName : undefined,
    userRoles: state => state.user?.roles
  }
})
