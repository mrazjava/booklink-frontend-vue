<template>
  <div id="login-logout">
    {{ getUserName }} |
    <span v-if="!isLoggedIn"><router-link to="/login">Login</router-link></span>
    <span v-if="isLoggedIn"><a class="logout" @click="logout">Logout</a></span>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginLogout',
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn },
    getUserName: function() {
      var username = this.$store.getters.userName
      if(!username) {
        username = 'signing in...'
      }
      return username
    }
  },
  methods: {
    logout: function () {
      this.$store.commit('auth_logout')
      delete axios.defaults.headers.common['Authorization']
      window.location.reload()
    }
  },
  created() {
  },
}
</script>

<style lang="scss" scoped>
.logout {
  cursor: pointer;
}
</style>
