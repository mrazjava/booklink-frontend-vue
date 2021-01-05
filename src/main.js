import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Axios from 'axios'
import Notifications from 'vue-notification'
import Loader from 'vue-loading-overlay';


import router from '@/components/Router'
import store from '@/components/Store'
import api from '@/components/Api'
import App from '@/App'
import '@/globals'

import '@/styles/booklink.css'
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.config.productionTip = false
Vue.prototype.$api = api

Vue.use(Notifications)
Vue.use(Vuelidate)
Vue.use(Loader);

if(store.getters.isLoggedIn) {
  Axios.defaults.headers.common['Authorization'] = store.getters.userToken
}

window.vm = new Vue({
  router,
  store,
  validations: {},
  render: h => h(App),
}).$mount(`#app`);
