<template>
  <div id="book-info">
    <div class="count" v-bind:class="{'count-p': isPositive(), 'count-n': !isPositive()}">
      {{ count }}
    </div>
    <div class="footnote">
      Refresh page to get a new count. Count is fetched from the <a :href="xHost+'/actuator/info'">backend</a> over
      <a :href="xHost+'/swagger-ui.html'">REST</a>.
    </div>
  </div>
</template>

<script>
  import Configuration from '@/util/configuration'

  export default {
    name: 'book-info',
    data() {
      return {
         xHost: Configuration.value('BACKEND_HOST'),
      };
    },
    props: {
      count: Number
    },
    methods: {
      isPositive() {
        return this.count>0;
      }
    }
  }
</script>

<style scoped>
  #book-info {

  }
  button {
    margin: 0 0.5rem 0 0;
  }
  .footnote {
    color: grey;
    font-size: 1em;
  }
  .count {
    font-size: 2.5em;
  }
  .count-p {
    color: green;
  }
  .count-n {
    color: red;
  }
</style>
