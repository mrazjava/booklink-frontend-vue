import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$http = axios

Vue.mixin({
  created() {
    console.log('[created] ' + this.$options.name)
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount(`#app`);
