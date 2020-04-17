<template>
  <div class="Login">
    <form class="Login__form" @submit.prevent="login">
      <h2>Sign In</h2>
      <label>Email</label>
      <input required v-model="email" type="email" placeholder="Name"/>
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password"/>
      <button type="submit">Login</button>

        <div class="Login__hint">
          Try any of the following:
          <table>
            <tr>
              <th>Test User</th>
              <th>Role Access</th>
            </tr>
            <tr>
              <td>foo@booklink.test</td>
              <td>FOO</td>
            </tr>
            <tr>
              <td>bar@booklink.test</td>
              <td>BAR</td>
            </tr>
            <tr>
              <td>ant@booklink.test</td>
              <td>ADMIN</td>
            </tr>
            <tr>
              <td>fox@booklink.test</td>
              <td/>
            </tr>
          </table>
          Password for all is: <span class="Login__hint__pwd">abc</span>
        </div>

        <div class="Login__hint">
          Try any of the following:
          <table>
            <tr>
              <th>Test User</th>
              <th>Role Access</th>
            </tr>
            <tr>
              <td>foo@booklink.test</td>
              <td>FOO</td>
            </tr>
            <tr>
              <td>bar@booklink.test</td>
              <td>BAR</td>
            </tr>
            <tr>
              <td>ant@booklink.test</td>
              <td>ADMIN</td>
            </tr>
            <tr>
              <td>fox@booklink.test</td>
              <td/>
            </tr>
          </table>
          Password for all is: <span class="Login__hint__pwd">abc</span>
        </div>

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
table {
}
.Login {
  &__form {
    margin: 0 auto;
    width: 250px;
    margin-top: 20px;
  }
  &__hint {
    color: grey;
    float: left;
    &__pwd {
      font-weight: bold;
    }
  }
}
</style>
