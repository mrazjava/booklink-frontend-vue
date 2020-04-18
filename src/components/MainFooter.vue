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
