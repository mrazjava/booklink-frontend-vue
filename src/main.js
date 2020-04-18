import Vue from 'vue'
import Axios from 'axios'
import Notifications from 'vue-notification'

import router from '@/components/Router'
import store from '@/components/Store'
import App from '@/App'
import '@/globals'
import api from '@/components/Api'

import { KEY_USER } from '@/components/Store'

Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.prototype.$api = api
Vue.prototype.$BEHOST = process.env.VUE_APP_BACKEND_HOST
Vue.use(Notifications)

if (localStorage.getItem(KEY_USER)) { // restore user state from storage
  var userData = JSON.parse(localStorage.getItem(KEY_USER))
  Vue.prototype.$http.defaults.headers.common['Authorization'] = userData.token
  store.commit('auth_user', userData)
}

var vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount(`#app`);

// accessible globally
global.VM = vm
global.BEHOST = process.env.VUE_APP_BACKEND_HOST
