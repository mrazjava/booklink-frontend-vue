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
    background-color: white;
    border-bottom: 1px solid #c0c0c0;
    background-image: none;
    background-repeat: repeat;
    background-attachment: scroll;
    background-position: 0% 0%;
    position: fixed;
    height: 40px;
    width: 100%;
    top: 0pt;
    left: 0pt;
  }
  &__am {
    background-color: white;
    background-image: none;
    background-repeat: repeat;
    background-attachment: scroll;
    background-position: 0% 0%;
    position: fixed;
    height: 30px;
    width: 100%;
    top: 40px;
    left: 0pt;
  }
  &__main {
    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-bottom: 50px;
    padding-top: 80px;
  }
}
.MainFooter {
  height: 40px;
  width: 100%;
  background-color: white;
  background-image: none;
  background-repeat: repeat;
  background-attachment: scroll;
  background-position: 0% 0%;
  border-top: 1px solid #c0c0c0;
  padding-top: 5px;
  position: fixed;
  bottom: 0pt;
  left: 0pt;
}
</style>
