<template>
  <div class="Login">
    <form class="Login__form" @submit.prevent="login">
      <h2>Sign In</h2>
      <label>Email</label>
      <input required v-model="email" type="email" placeholder="Name"/>
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password"/>
      <button class="login-btn" type="submit">Login</button>
    </form>
    <div class="Login__hint">
      Feel free to try any of the following test users:
      <table class="tbl-shadow">
        <col/>
        <col/>
        <col/>
        <thead>
        <tr>
          <th>Test User</th>
          <th>Role Access</th>
          <th>Password</th/>
        </tr>
      </thead>
        <tbody>
        <tr>
          <td>foo@booklink.test</td>
          <td>FOO</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>bar@booklink.test</td>
          <td>BAR</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>ant@booklink.test</td>
          <td>ADMIN</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>fox@booklink.test</td>
          <td/>
          <td>abc</td>
        </tr>
      </tbody>
      </table>
    </div>
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

.Login__hint table {
  margin-top: 0;
  border-collapse: collapse;
  border: 1px solid #eee;
  border-bottom: 2px solid #00cccc;
  tr {
     &:hover {
      background: #f4f4f4;

      td {
        color: #555;
      }
    }
  }
  th, td {
    color: #999;
    border: 1px solid #eee;
    padding: 12px 35px;
    border-collapse: collapse;
  }
  th {
    background: #00cccc;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    &.last {
      border-right: none;
    }
  }
}

.login-btn {
  margin-top: 10px;
}

col:nth-child(3) {
}
tbody tr:nth-child(odd) {
}
.Login {
  &__form {
    margin: 0 auto;
    width: 300px;
    margin-top: 20px;
  }
  &__hint {
    color: grey;
    margin-top: 30px;
    &__pwd {
      font-weight: bold;
    }
  }
}
</style>
