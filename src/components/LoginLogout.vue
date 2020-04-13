<template>
  <div id="login-logout">
    {{ user ? user.name : `Loading ...` }} |
    <span v-if="!isLoggedIn"><router-link to="/login">Login</router-link></span>
    <span v-if="isLoggedIn"><a @click="logout">Logout</a></span>
  </div>
</template>

<script>
export default {
  name: 'LoginLogout',
  data() {
    return {
      user: null,
    }
  },
  computed: {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/login')
      })
    }
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
</style>
