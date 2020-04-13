<template>
  <div class="Login">
    <h2>Sign In</h2>
    <form class="Login__form" @submit.prevent="login">
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
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  },
  mounted() {
  },
};
</script>

<style lang="scss">
.Login {
  width: 300px;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
