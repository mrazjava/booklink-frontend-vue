<template>
  <div class="Login">
    <div class="Login__area">
      <h2>Enter Booklink</h2>
      <form class="Login__area__form" @submit.prevent="login">
        <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
          <input class="form__input glowing-border" v-model.trim="email" @focusout="$v.email.$touch()" placeholder="E-mail"/>
        </div>
        <div class="error-bl" v-if="!$v.email.required">E-mail is required</div>
        <div class="error-bl" v-if="!$v.email.email">Invalid e-mail format</div>
        <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
          <input class="form__input glowing-border" v-model.trim="password" @focusout="$v.password.$touch()" placeholder="Password"/>
        </div>
        <div class="error-bl" v-if="!$v.password.required">Password is required</div>
        <div class="error-bl" v-if="!$v.password.minLength">Password must be at least {{$v.password.$params.minLength.min}} characters long.</div>
        <button class="login-btn" type="submit">Login</button>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR_BACKEND'">Authentication failed. Try again.</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
      </form>
      <hr/>
      <h5>or *</h5>
      <v-facebook-login
      @login="fbLogin"
      v-model="facebook.model"
      :app-id="fbAppId"
      @sdk-init="fbSdkInit"
      :useAltLogo="facebook.useAltLogo"
      class="docs-v-facebook-login mx-auto"
      logo-class="docs-v-facebook-login-logo"
      loader-class="docs-v-facebook-login-loader"
      />
    </div>
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
    <div class="login-footnote">
      * <span v-if="!liveEnv">Authentication though a social netowrk is restricted in development environment to protected test users only. It is available for general audience exclusively in LIVE environment.</span>
      We only collect minimum required social network information (email, name) to conveniently register you into our system with a single click login. For details feel free to check our <router-link to="/about/privacy-policy">privacy policy</router-link>.
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { required, email, minLength } from 'vuelidate/lib/validators'
import Deployment from '@/deployment'
import VFacebookLogin from 'vue-facebook-login-component'

export default {
  name: `Login`,
  components: {
    VFacebookLogin
  },
  data: () => ({
    email : "",
    password : "",
    submitStatus: null,
    facebook: {
      FB: {},
      model: {},
      scope: {},
      user: {},
      useAltLogo: false
    },
  }),
  computed: {
    cssVars() {
      return {
        '--bg-header': global.CLR_BG_TH,
        '--fg-header': global.CLR_FG_TH
      }
    },
    liveEnv() {
      return ('live'.localeCompare(Deployment.value('FE_DEPLOY_ENV')) == 0)
    },
    fbAppId() {
      return Deployment.value('FE_FB_APPID')
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
        this.authenticate({ email, password })
      }
    },
    authenticate: function(payload) {
      this.$store.commit('auth_request')
      this.$api.fetchV1({ method:'patch', path: '/auth/login', data: payload}, {
        callback: this.loginSuccess,
        callbackErr: this.loginFailure
      })
    },
    loginSuccess: function(resp) {
      var userData = resp.data
      axios.defaults.headers.common['Authorization'] = userData.token
      this.$store.commit('auth_status', 'success')
      this.$store.commit('auth_user', userData)
      var dest = '/my-account'
      if(this.$route.query.dest) {
        dest = this.$route.query.dest;
      }
      this.$router.push(dest)
    },
    loginFailure: function() {
      this.$store.commit('auth_status', 'error')
      this.$store.commit('auth_logout')
      this.submitStatus = 'ERROR_BACKEND'
    },
    // FACEBOOK
    getUserData() {
      this.facebook.FB.api(
        '/me',
        { fields: 'id, name, first_name, middle_name, last_name, email, picture' }, fbUser => {
          console.log('foo')
          console.log(fbUser)
          var payload = {
            fbFirstName: fbUser.first_name,
            fbLastName: fbUser.last_name,
            email: fbUser.email,
            fbId: fbUser.id
          }
          console.log(payload)
          this.authenticate(payload)
        }
      )
    },
    fbSdkInit({ FB, scope }) {
      this.facebook.scope = scope
      this.facebook.FB = FB
    },
    fbLogin() {
      this.getUserData()
    }
  },
};
</script>

<style lang="scss" scoped>
.Login__hint {
  margin-top: 30px;
  table {
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
}
.login-btn {
  margin-bottom: 20px;
}
col:nth-child(3) {
}
tbody tr:nth-child(odd) {
}
.Login {
  &__area {
    width: 350px;
    margin: 0 auto;
    &__form {
      h4 {
        margin-bottom: 20px;
      }
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
}
.docs-v-facebook-login {
  width: 100%;
  margin-top: 10px;
}
h5 {
  text-align: center;
  margin-top: 5px;
  margin-bottom: 10px;
}
.login-footnote {
  font-size: 0.5em;
}
</style>
