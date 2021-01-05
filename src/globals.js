import Vue from 'vue'
import VueModal from '@kouts/vue-modal';
import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/dist/vueDirectiveTooltip.css';

Vue.mixin({
  created() {
    var opts = this.$options;
    var comp;
    if(opts.parent) {
      comp = '[' + opts.name + ']'
      if(opts.name == 'RouterLink') {
        comp = comp + ' to=' + opts.propsData.to
      }
    }
    console.debug(comp)
    //console.debug(this.$options)
  },
});

Vue.component('Modal', VueModal);
Vue.use(Tooltip);

global.bus = new Vue()
global.CLR_BG_TH = '#F7BE81'
global.CLR_FG_TH = 'black'
global.EVT_FB_LOGOUT = 'fb-logout'
