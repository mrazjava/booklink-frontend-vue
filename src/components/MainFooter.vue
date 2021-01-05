<template>
  <footer class="MainFooter">
    <div class="MainFooter__left">
      <img id="imgCopy" src="@/assets/copyleft.png" alt="Copyleft" title="Copyleft"/> <a href="https://github.com/mrazjava/booklink">Booklink</a>
    </div>
    <div class="MainFooter__center">
        <a href="#" @click="dlgConstruction=true" style="color:red;">UNDER CONSTRUCTION</a>
    </div>
    <div class="MainFooter__right">
      v{{xVersion}}-{{xEnv}}{{indicateSandbox}}
    </div>
    <div id="dlg-construction"></div>
    <Modal v-model="dlgConstruction" title="Under Construction" v-bind:appendTo="'#dlg-construction'"> 
        <p>
          We are actively working on <strong>booklinktrove</strong> but it is not ready for general release yet. While
          we do not have a specific timeframe, announcements will follow as we get closer to the finish line. 
          The <a href="https://pre.booklinktrove.com">pre-release</a> environment is where we host the live preview.
        </p>
        <p>
          Release dates, and notes on the new features which we constantly add can be viewed on <a href="https://github.com/mrazjava/booklink-frontend-vue/releases">github</a>.
        </p>
        <p>
          Once live, we will operate at <a href="https://www.booklinktrove.com">www.booklinktrove.com</a>.
          Final version will be 1.0.0
        </p>
    </Modal>
  </footer>
</template>

<script>
import Deployment from '@/deployment'

export default {
  name: 'MainFooter',
  data() {
    return {
      xEnv: Deployment.value('FE_DEPLOY_ENV'),
      xVersion: process.env.VUE_APP_VERSION,
      dlgConstruction: false
    };
  },
  computed: {
    indicateSandbox() {
      return (Deployment.value('FE_SANDBOX')==1 ? ' (sandbox)' : '')
    }
  }
};
</script>
<style lang="scss">
  #dlg-construction {
    .vm-titlebar {
      background-color: red;
      padding-bottom: 5px;
    }
    .vm-title {
      color: yellow;
    }
  }
  .MainFooter {
    &__left {
      float:left;
      padding-left: 5px;
    }
    &__center {
      text-align: center;
    }
    &__right {
      float:right;
      font-size:0.8em;
      font-family:courier;
      position:relative;
      padding-right: 5px;
      margin-top: -20px;
    }
  }
  #imgCopy {
    width: 16px;
    position: relative;
    top: 1px;
  }
</style>
