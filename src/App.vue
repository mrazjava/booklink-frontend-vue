<template>
  <div id="app">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
    <notifications  position="bottom left" group="api" width="450" />
  </div>
</template>

<script>
import EnvironmentTokens from '@/envtokens'

export default {
  name: 'App',
  components: {
    EnvironmentTokens // DO NOT REMOVE; needed by docker entrypoint.sh!
  },
  data() {
    return {
      layout: `div`,
    };
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body, html {
  height: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

html {
  line-height: 1.6;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

.tbl-shadow {
  box-shadow: 0px 0px 20px rgba(0,0,0,0.10),
   0px 10px 20px rgba(0,0,0,0.05),
   0px 20px 20px rgba(0,0,0,0.05),
   0px 30px 20px rgba(0,0,0,0.05);
}

#app {
}
p {
  &:not(:first-child) {
    margin-top: 1.25em;
  }
}
.active-menu-item {
  color: maroon;
}
</style>
