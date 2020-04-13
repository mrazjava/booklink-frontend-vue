import Vue from 'vue'
import Axios from 'axios'

import router from '@/components/Router'
import store from '@/components/Store'

import App from '@/App'

import '@/globals'

Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.prototype.$BEHOST = process.env.VUE_APP_BACKEND_HOST

const authToken = localStorage.getItem('auth-token')
//console.log(localStorage);

if (authToken) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = authToken
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount(`#app`);
