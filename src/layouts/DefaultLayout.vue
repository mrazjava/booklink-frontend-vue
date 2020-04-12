<template>
  <div class="DefaultLayout">
    <nav class="DefaultLayout__nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/proof-of-concept">P-O-C</router-link> |
      <router-link to="/about">About</router-link>

      <div class="DefaultLayout__login">
        | <router-link to="/login">Login</router-link>
      </div>
      <div class="DefaultLayout__user">
        {{ user ? user.name : `Simulating Login...` }}
      </div>
    </nav>
    <main class="DefaultLayout__main">
      <router-view />
    </main>
    <footer class="DefaultLayout__footer">
      <div class="DefaultLayout__footer__left">
        <img id="imgCopy" src="@/assets/copyleft.png" alt="Copyleft" title="Copyleft"/> <a href="https://github.com/mrazjava/booklink">Booklink</a>
      </div>
      <div class="DefaultLayout__footer__right">
        v{{xVersion}}-{{xEnv}}
      </div>
    </footer>
  </div>
</template>

<script>
import Configuration from '@/util/configuration'

export default {
  name: `DefaultLayout`,
  data() {
    return {
      user: null,
      xEnv: Configuration.value('RUNNING_ENV'),
      xVersion: process.env.VUE_APP_VERSION,
    };
  },
  created() {
    // Simulate fetching user data.
    setTimeout(() => {
      this.user = { name: `Detective Bookworm` };
    }, 1000);
  },
};
</script>

<style lang="scss">
h1, h2, h3, h4, h5 {
  margin:0;
}
.DefaultLayout {
  /*width: 50em;*/
  margin-right: auto;
  margin-left: auto;
  padding-right: 1em;
  padding-left: 1em;

  &__nav {
    padding-top: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid #c0c0c0;
  }

  &__user {
    float: right;
  }
  &__login {
    float: right;
    margin-left: 5px;
  }
  &__main {
    min-height: 500px;
    padding-top: 0.5em;
    padding-bottom: 2em;
  }

  &__footer {
    padding-top: 0.5em;
    border-top: 1px solid #c0c0c0;
    &__right {
      float:right;
      font-size:0.8em;
      font-family:courier;
      position:relative;
      top:-7px;
    }
    &__left {
      float:left;
    }
  }
  #imgCopy {
    width: 16px;
    position: relative;
    top: 1px;
  }
}
</style>
