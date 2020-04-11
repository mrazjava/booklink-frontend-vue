<template>
  <layout name="Layout">
    <div class="About">
      <h2>About</h2>
      <p>
        Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>

      <h2 id="headerTech">Technical Info</h2>
      <technical-info />

    </div>
  </layout>
</template>

<script>
import Layout from '@/layouts/Layout';
import TechnicalInfo from '@/components/TechnicalInfo'

export default {
  name: `About`,
  components: {
    Layout,
    TechnicalInfo
  }
};
</script>

<style lang="scss">
</style>
