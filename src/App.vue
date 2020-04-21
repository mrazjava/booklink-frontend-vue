<template>
  <div id="app">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
    <notifications  position="bottom left" group="api" width="450" />
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
