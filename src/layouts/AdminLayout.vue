<template>
  <div class="AdminLayout">
    <nav class="AdminLayout__nav">
      <main-menu />
    </nav>
    <main class="AdminLayout__main">
      <div class="AdminLayout__leftNav">
        <span class="AdminLayout__leftNav__title">My Account:</span>
        <router-link to="/secured/reviews">Reviews</router-link>
      </div>
      <router-view />
    </main>
    <footer class="AdminLayout__footer">
      <div class="AdminLayout__footer__left">
        <img id="imgCopy" src="@/assets/copyleft.png" alt="Copyleft" title="Copyleft"/> <a href="https://github.com/mrazjava/booklink">Booklink</a>
      </div>
      <div class="AdminLayout__footer__right">
        v{{xVersion}}-{{xEnv}}
      </div>
    </footer>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu'

export default {
  name: 'AdminLayout',
  components: {
    MainMenu,
  },
  data() {
    return {
      xEnv: process.env.VUE_APP_ENV,
      xVersion: process.env.VUE_APP_VERSION,
    };
  },
};
</script>

<style lang="scss">
h1, h2, h3, h4, h5 {
  margin:0;
}
.AdminLayout {
  /*width: 50em;*/
  margin-right: auto;
  margin-left: auto;
  padding-right: 1em;
  padding-left: 1em;

  &__nav {
    padding-top: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid #c0c0c0;
  }
  &__leftNav {
    border-bottom: dotted 1px lightgrey;
    padding-bottom: 5px;
    margin-bottom: 10px;
    &__title {
      margin-right: 10px;
    }
  }
  &__main {
    min-height: 500px;
    padding-top: 0.5em;
    padding-bottom: 2em;
  }
  &__footer {
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
}
</style>
