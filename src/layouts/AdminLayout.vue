<template>
  <div class="AdminLayout">
    <nav class="AdminLayout__mm">
      <main-menu />
    </nav>
    <nav class="AdminLayout__am">
      <admin-menu />
    </nav>
    <main class="AdminLayout__main">
      <router-view />
    </main>
    <main-footer />
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu'
import AdminMenu from '@/components/AdminMenu'
import MainFooter from '@/components/MainFooter'

export default {
  name: 'AdminLayout',
  components: {
    MainMenu,
    AdminMenu,
    MainFooter
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
  &__mm {
    padding-top: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid #c0c0c0;
  }
  &__am {
  }
  &__main {
    min-height: 500px;
    padding-top: 0.5em;
    padding-bottom: 2em;
  }
}
</style>
