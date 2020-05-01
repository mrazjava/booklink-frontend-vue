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
export default {
  name: `Home`
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
