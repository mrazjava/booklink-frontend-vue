import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Axios from 'axios'
import Notifications from 'vue-notification'

import router from '@/components/Router'
import store from '@/components/Store'
import api from '@/components/Api'
import App from '@/App'
import '@/globals'

import { KEY_USER } from '@/components/Store'
import '@/assets/styles/booklink.css'

Vue.config.productionTip = false
Vue.prototype.$api = api

Vue.use(Notifications)
Vue.use(Vuelidate)

if (localStorage.getItem(KEY_USER)) { // restore user state from storage
  var userData = JSON.parse(localStorage.getItem(KEY_USER))
  Axios.defaults.headers.common['Authorization'] = userData.token
  store.commit('auth_user', userData)
}

new Vue({
  router,
  store,
  validations: {},
  render: h => h(App),
}).$mount(`#app`);
