import Vue from 'vue'

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

global.CLR_BG_TH = '#F7BE81'
global.CLR_FG_TH = 'black'
