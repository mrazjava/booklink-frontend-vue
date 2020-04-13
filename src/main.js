import Vue from 'vue'
import Axios from 'axios'

import router from '@/components/Router'
import store from '@/components/Store'

import App from '@/App'

Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.prototype.$BEHOST = process.env.VUE_APP_BACKEND_HOST

const authToken = localStorage.getItem('auth-token')
//console.log(localStorage);

if (authToken) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = authToken
}

Vue.mixin({
  created() {
    var opts = this.$options;
    if(opts.parent) {
      var comp = '[' + opts.name + ']'
      if(opts.name == 'RouterLink') {
        comp = comp + ' to=' + opts.propsData.to
      }
      console.log(comp)
    }
    else {
      console.log('[main]')
    }
    //console.debug(this.$options)
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount(`#app`);

export default {
  name: 'Main'
}
