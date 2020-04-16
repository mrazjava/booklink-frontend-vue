<template>
  <div class="Login">
    <div class="Login__hint">
      Try any of the following: foo@booklink.test, bar@booklink.test,
      ant@booklink.test, fox@booklink.test. Password for all is: abc
    </div>
    <form class="Login__form" @submit.prevent="login">
      <h2>Sign In</h2>
      <label>Email</label>
      <input required v-model="email" type="email" placeholder="Name"/>
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password"/>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>

export default {
  name: `Login`,
  data(){
    return {
      email : "",
      password : ""
    }
  },
  methods: {
    login: function () {
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', { email, password })
        .then(() => {
          var dest = '/'
          if(this.$route.query.dest) {
            dest = this.$route.query.dest;
          }
          console.debug('destination: ' + dest)
          this.$router.push(dest)
        })
        .catch(err => console.log(err))
    }
  },
  mounted() {
  },
};
</script>

<style lang="scss">
.Login {
  &__form {
    margin: 0 auto;
    width: 300px;
    margin-top: 20px;
  }
  &__hint {
    color: grey;
  }
}
</style>
