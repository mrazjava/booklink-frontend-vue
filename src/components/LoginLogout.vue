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
      //global.bus.$emit(global.EVT_FB_LOGOUT)
//      console.log('hola')
//      console.log(this.$store.getters.fbScope)
//      if(this.$store.getters.fbScope) {
//        console.log('ending your facebook session')
//        this.$store.getters.fbScope.logout()
//        this.$store.commit('auth_fb', null)
//        console.log('fb gone')
//        console.log(this.$store.getters.fbScope)
//      }
      window.location.reload()
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
