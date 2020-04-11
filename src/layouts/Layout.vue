<template>
  <div class="Layout">
    <nav class="Layout__nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/proof-of-concept">P-O-C</router-link> |
      <router-link to="/about">About</router-link>

      <div class="Layout__user">
        {{ user ? user.name : `Simulating Login...` }}
      </div>
    </nav>
    <main class="Layout__main">
      <router-view />
    </main>
    <footer class="Layout__footer">
    <div class="Layout__footer__left">
      <img id="imgCopy" src="@/assets/copyleft.png" alt="Copyleft" title="Copyleft"/> <a href="https://github.com/mrazjava/booklink">Booklink</a>
    </div>
    <div class="Layout__footer__right">
       v{{xVersion}}-{{xEnv}}
    </div>
    </footer>
  </div>
</template>

<script>
import Configuration from '@/util/configuration'

export default {
  name: `Layout`,
  data() {
    return {
      user: null,
      xEnv: Configuration.value('RUNNING_ENV'),
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
.Layout {
  max-width: 42em;
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
