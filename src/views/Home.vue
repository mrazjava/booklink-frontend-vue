<template>
  <div class="Content Home">
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </p>

    <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Login</GoogleLogin>

    <h2 class="Home__construction">Under Construction</h2>
    <p>
      We are actively working on <strong>booklinktrove</strong> but it is not ready for general release yet. While
      we do not have a specific timeframe, announcements will follow as we get closer
      to the finish line. Furthermore, version (which appears in the footer) will contain a suffix <strong>-RC</strong>
      indicating a general <strong>release candidate</strong>. In the meantime, the <a href="https://pre.booklinktrove.com">pre-release</a>
      environment is where all the action is. It runs the latest updates and is meant for the
      general preview.
    </p>
    <p>
      Release dates, and notes on the new features which we constantly add can be viewed on <a href="https://github.com/mrazjava/booklink-frontend-vue/releases">github</a>.
    </p>
    <p>
      Once live, we will operate at <a href="https://www.booklinktrove.com">www.booklinktrove.com</a>.
      Final version will be 1.0.0
    </p>
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';

export default {
  name: `Home`,
  components: {
    GoogleLogin
  },
  data() {
    return {
      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
        client_id: "658815266502-6dlgh8lle50hhhltlgholjqrn3a27osl.apps.googleusercontent.com"
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    }
  },
  methods: {
    onSuccess(googleUser) {
      console.log(googleUser);
      // This only gets the user information: id, name, imageUrl and email
      console.log(googleUser.getBasicProfile());
      googleUser.disconnect();
    },
    onFailure() {
      console.log('too bad');
    }
  }
};
</script>

<style lang="scss" scoped>
.Home {
  h2:first-child {
    margin-bottom: 25px;
  }
  &__construction {
    color: red;
  }
}
</style>
