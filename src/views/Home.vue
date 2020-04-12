<template>
  <div class="Home">
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </p>

    <h2>Amet sit</h2>
    <p>
      Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </p>
  </div>
</template>

<script>
import DefaultLayout from '../layouts/DefaultLayout'

export default {
  name: `Home`,
  components: {
  },
  mounted() {
    console.log("mounted: #Home");
  },
  created() {
    this.$emit("update:layout", DefaultLayout);
  }
};
</script>
