import Vue from 'vue'
import Axios from 'axios'
import Notifications from 'vue-notification'

import router from '@/components/Router'
import store from '@/components/Store'
import App from '@/App'
import '@/globals'
import api from '@/components/Api'

import { KEY_TOKEN } from '@/components/Store'

Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.prototype.$api = api
Vue.prototype.$BEHOST = process.env.VUE_APP_BACKEND_HOST
Vue.use(Notifications)

const authToken = localStorage.getItem(KEY_TOKEN)
if (authToken) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = authToken
}

var vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount(`#app`);

// accessible globally
global.VM = vm
global.BEHOST = process.env.VUE_APP_BACKEND_HOST
