import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Axios from 'axios'
import Notifications from 'vue-notification'

import router from '@/components/Router'
import store from '@/components/Store'
import api from '@/components/Api'
import App from '@/App'
import '@/globals'

import '@/styles/booklink.css'

Vue.config.productionTip = false
Vue.prototype.$api = api

Vue.use(Notifications)
Vue.use(Vuelidate)

if(store.getters.isLoggedIn) {
  Axios.defaults.headers.common['Authorization'] = store.getters.userToken
}

export const bus = new Vue()

window.vm = new Vue({
  router,
  store,
  validations: {},
  render: h => h(App),
}).$mount(`#app`);
