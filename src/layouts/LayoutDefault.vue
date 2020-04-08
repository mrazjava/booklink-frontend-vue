<template>
  <div class="LayoutDefault">
    <nav class="LayoutDefault__nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/proof-of-concept">P-O-C</router-link> |
      <router-link to="/about">About</router-link>

      <div class="LayoutDefault__user">
        {{ user ? user.name : `Loading...` }}
      </div>
    </nav>
    <main class="LayoutDefault__main">
      <slot/>
    </main>
    <footer class="LayoutDefault__footer">
    <div class="LayoutDefault__footer__dev">
        VERSION: {{xVersion}}, ENV: {{xEnv}}, BRANCH: {{xBranch}}, HEAD: {{xCommit}}
    </div>
    <div class="LayoutDefault__footer__info">
      &copy; <a href="https://github.com/mrazjava/booklink">Booklink</a>
    </div>
    </footer>
  </div>
</template>

<script>
import Configuration from '@/util/configuration'

export default {
  name: `LayoutDefault`,
  data() {
    return {
      user: null,
        xHost: Configuration.value('BACKEND_HOST'),
        xEnv: Configuration.value('RUNNING_ENV'),
        xVersion: process.env.VUE_APP_VERSION,
        xCommit: process.env.VUE_APP_GIT_SHORT_COMMIT_HASH,
        xBranch: process.env.VUE_APP_GIT_BRANCH,
    };
  },
  created() {
    // Simulate fetching user data.
    setTimeout(() => {
      this.user = { name: `Detective Bookworm` };
    }, 2000);
  },
};
</script>

<style lang="scss">
.LayoutDefault {
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
    padding-top: 1.5em;
    padding-bottom: 2em;
  }

  &__footer {
    padding-top: 0.5em;
    border-top: 1px solid #c0c0c0;
    &__info {
    float:right;
    }
      &__dev {
        font-family:courier;
        font-size:0.8em;
        float:left;
      }
  }
}
</style>

