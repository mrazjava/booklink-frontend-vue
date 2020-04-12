<template>
  <layout name="Layout">
    <div class="Foo">
      <h2>Foo</h2>
      I am secured
    </div>
  </layout>
</template>

<script>
import Layout from '@/layouts/Layout';

export default {
  name: `Foo`,
  components: {
    Layout,
  },
  mounted() {
  },
};
</script>
