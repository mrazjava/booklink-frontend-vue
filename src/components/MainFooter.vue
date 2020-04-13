<template>
  <footer class="MainFooter">
    <div class="MainFooter__left">
      <img id="imgCopy" src="@/assets/copyleft.png" alt="Copyleft" title="Copyleft"/> <a href="https://github.com/mrazjava/booklink">Booklink</a>
    </div>
    <div class="MainFooter__right">
      v{{xVersion}}-{{xEnv}}
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  data() {
    return {
      xEnv: process.env.VUE_APP_ENV,
      xVersion: process.env.VUE_APP_VERSION,
    };
  },
};
</script>

<style lang="scss">
.MainFooter {
  padding-top: 0.5em;
  border-top: 1px solid #c0c0c0;
  &__right {
    float:right;
    font-size:0.8em;
    font-family:courier;
    position:relative;
    top:-7px;
  }
  &__left {
    float:left;
  }
}
#imgCopy {
  width: 16px;
  position: relative;
  top: 1px;
}
</style>
