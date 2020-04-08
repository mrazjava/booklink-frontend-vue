<template>
  <div id="poc-count">
    <div class="count" v-bind:class="{'count-p': isPositive(), 'count-n': !isPositive()}">
      {{ count }}
    </div>
    <div class="footnote">
      Refresh page to get a new count. Count is fetched from the <a :href="backendHost+'/actuator/info'">backend</a> over
      <a :href="backendHost+'/swagger-ui.html'">REST</a>.
    </div>
  </div>
</template>

<script>
import Configuration from '@/util/configuration'

  export default {
    name: 'PocCount',
    data() {
      return {
        backendHost: Configuration.value('BACKEND_HOST'),
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
