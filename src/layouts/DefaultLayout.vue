<template>
  <div class="DefaultLayout">
    <nav class="DefaultLayout__nav">
      <main-menu />
    </nav>
    <main class="DefaultLayout__main">
      <router-view />
    </main>
    <main-footer />
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu'
import MainFooter from '@/components/MainFooter'

export default {
  name: 'DefaultLayout',
  components: {
    MainMenu,
    MainFooter
  }
};
</script>

<style lang="scss">
h1, h2, h3, h4, h5 {
  margin:0;
}
.DefaultLayout {
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

  &__main {
    min-height: 500px;
    padding-top: 0.5em;
    padding-bottom: 2em;
  }
}
</style>
