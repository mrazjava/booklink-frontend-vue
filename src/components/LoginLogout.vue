<template>
  <div id="login-logout">
    {{ getUser }} |
    <span v-if="!isLoggedIn"><router-link to="/login">Login</router-link></span>
    <span v-if="isLoggedIn"><a class="logout" @click="logout">Logout</a></span>
  </div>
</template>

<script>
export default {
  name: 'LoginLogout',
  data() {
    return {
    }
  },
  computed: {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn },
    getUser: function() { return this.$store.getters.userName }
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
  },
}
</script>

<style lang="scss">
.logout {
  cursor: pointer;
}
</style>
