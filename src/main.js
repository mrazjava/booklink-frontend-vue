import Vue from 'vue'
import Axios from 'axios'

import Env from '@/components/Env'
import router from '@/components/Router'
import store from '@/components/Store'

import App from '@/App'

Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.prototype.$BEHOST = process.env.VUE_APP_BACKEND_HOST

Vue.mixin({
  created() {
    console.log('[created] ' + this.$options.name)
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount(`#app`);
