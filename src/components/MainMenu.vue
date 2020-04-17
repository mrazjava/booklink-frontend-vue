<template>
  <div id="main-menu" class="MainMenu">
    <router-link to="/home">Home</router-link> |
    <router-link to="/proof-of-concept">P-O-C</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/admin">My Account</router-link>

    <div class="MainMenu__ll">
      <login-logout />
    </div>
  </div>
</template>

<script>
import LoginLogout from '@/components/LoginLogout'

export default {
  name: 'MainMenu',
  components: {
    LoginLogout
  }
}
</script>

<style lang="scss">
.MainMenu {
  padding-left: 5px;
  padding-top: 7px;
  &__ll {
    float: right;
    margin-left: 5px;
    padding-right: 5px;
  }
}
</style>
