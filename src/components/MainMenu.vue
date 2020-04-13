<template>
  <div id="main-menu">
    <router-link to="/home">Home</router-link> |
    <router-link to="/proof-of-concept">P-O-C</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/admin">My Account</router-link>

    <div class="MainMenu__login">
      | <router-link to="/login">Login</router-link>
    </div>
    <div class="MainMenu__user">
      {{ user ? user.name : `Simulating Login...` }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  data() {
    return {
      user: null,
    };
  },
  created() {
    // Simulate fetching user data.
    setTimeout(() => {
      this.user = { name: `Detective Bookworm` };
    }, 1000);
  },
}
</script>

<style lang="scss">
.MainMenu {
  &__login {
    float: right;
    margin-left: 5px;
  }
  &__user {
    float: right;
  }
}
</style>
