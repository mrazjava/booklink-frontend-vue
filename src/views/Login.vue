<template>
  <div class="Login">
    <form class="Login__form" @submit.prevent="login">
      <h2>Sign In</h2>
      <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
        <input class="form__input" v-model.trim="email" @focusout="$v.email.$touch()" placeholder="E-mail"/>
      </div>
      <div class="error-bl" v-if="!$v.email.required">E-mail is required</div>
      <div class="error-bl" v-if="!$v.email.email">Invalid e-mail format</div>
      <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
        <input class="form__input" v-model.trim="password" @focusout="$v.password.$touch()" placeholder="Password"/>
      </div>
      <div class="error-bl" v-if="!$v.password.required">Password is required</div>
      <div class="error-bl" v-if="!$v.password.minLength">Password must be at least {{$v.password.$params.minLength.min}} characters long.</div>
      <button class="login-btn" type="submit">Login</button>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
      <p class="typo__p" v-if="submitStatus === 'ERROR_BACKEND'">Authentication failed. Try again.</p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
    </form>
    <div class="Login__hint">
      Feel free to try any of the following test users:
      <table :style="cssVars" class="tbl-shadow">
        <col/>
        <col/>
        <col/>
        <thead>
          <tr>
            <th>Test User</th>
            <th>Role Access</th>
            <th>Password</th>
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
            <td>dd@booklink.test</td>
            <td>DETECTIVE</td>
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
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  name: `Login`,
  data(){
    return {
      email : "",
      password : "",
      submitStatus: null
    }
  },
  computed: {
    cssVars() {
      return {
        '--bg-header': global.CLR_BG_TH,
        '--fg-header': global.CLR_FG_TH
      }
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(3)
    }
  },
  methods: {
    login: function () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
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
        .catch(() => {
          this.submitStatus = 'ERROR_BACKEND'
        })
      }
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
  border-bottom: 2px solid var(--bg-header);
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
    background: var(--bg-header);
    color: var(--fg-header);
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
    h2 {
      margin-bottom: 30px;
    }
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
