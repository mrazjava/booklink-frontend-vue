<template>
  <div class="DefaultLayout">
    <nav class="DefaultLayout__nav">
      <main-menu />
    </nav>
    <nav v-if="isLoggedIn()" class="DefaultLayout__admin">
      <admin-menu />
    </nav>
    <main class="DefaultLayout__main" v-bind:class="{'admin-context': isLoggedIn()}">
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
  name: 'DefaultLayout',
  components: {
    MainMenu,
    AdminMenu,
    MainFooter
  },
  methods: {
    isLoggedIn : function() { return this.$store.getters.isLoggedIn }
    //isLoggedIn : function(){ return this.$store.getters.isLoggedIn }
  },
};
</script>

<style lang="scss">
h1, h2, h3, h4, h5 {
  margin:0;
}
.DefaultLayout {
  min-height: 100%;
  &__nav {
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
  &__main {
    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-bottom: 50px;
    padding-top: 50px;
  }
  &__admin {
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
}
.admin-context {
  padding-top: 75px;
}
.Content {
  height: 100%;
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
  position: fixed;
  padding-top: 5px;
  bottom: 0pt;
  left: 0pt;
}
</style>
