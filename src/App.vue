<template>
  <div id="app">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  name: 'App',
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

html {
  line-height: 1.6;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
