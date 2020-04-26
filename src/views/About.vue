<template>
  <div id="About" class="About">
    <h2>About</h2>
    <p>
      Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </p>
    <ul>
    <li>Our <router-link to="/about/privacy-policy">Privacy Policy</router-link></li>
    </ul>
    <h2 class="About__techinf-header">Technical Info</h2>
    <technical-info />
  </div>
</template>

<script>
import TechnicalInfo from '@/components/TechnicalInfo'

export default {
  name: `About`,
  components: {
    TechnicalInfo
  }
};
</script>

<style lang="scss" scoped>
.About {
  &__techinf-header:not(:first-child) {
    margin-top:15px;
  }
}
</style>
