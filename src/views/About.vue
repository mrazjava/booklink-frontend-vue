<template>
  <div id="About" class="About">
    <h2>About</h2>
    <p>
      Booklink encourages tracking the content consumed by reading a book. It allows to cross reference books by common
      themes such as subject or period of time. A book can have "links" to other books, and a link describes
      the commonality. Links can be browsed interactively, searched and be voted on.
    </p>
    <ul>
    <li>Our <router-link to="/about/privacy-policy">Privacy Policy</router-link></li>
    </ul>
    <h2 class="About__techinf-header">Technical Info</h2>
    <div id="poc">
      <router-link to="/proof-of-concept">Proof of Concept</router-link>
    </div>
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
#poc {
  margin-top: -5px;
  margin-bottom: 10px;
  margin-left: 20px;
}
</style>
