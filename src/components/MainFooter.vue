<template>
  <footer class="MainFooter">
    <div class="MainFooter__left">
      <img id="imgCopy" src="@/assets/copyleft.png" alt="Copyleft" title="Copyleft"/> <a href="https://github.com/mrazjava/booklink">Booklink</a>
    </div>
    <div class="MainFooter__right">
      v{{xVersion}}-{{xEnv}}{{indicateSandbox}}
    </div>
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
    };
  },
  computed: {
    indicateSandbox() {
      return ('production'.localeCompare(process.env.NODE_ENV)==0 && 'live'.localeCompare(this.xEnv)!=0 ? ' (sandbox)' : '')
    }
  }
};
</script>

<style lang="scss">
.MainFooter {
  &__right {
    float:right;
    font-size:0.8em;
    font-family:courier;
    position:relative;
    padding-right: 5px;
  }
  &__left {
    float:left;
    padding-left: 5px;
  }
}
#imgCopy {
  width: 16px;
  position: relative;
  top: 1px;
}
</style>
