<template>
  <div id="book-info">
    [{{ backendUrl }}] | [{{ dockeroo }}]
    <div class="count" v-bind:class="{'count-p': isPositive(), 'count-n': !isPositive()}">
      {{ count }}
    </div>
    <div class="footnote">
      Refresh page to get a new count. Count is fetched from booklink-backend over rest
    </div>
  </div>
</template>

<script>
  export default {
    name: 'book-info',
    data() {
      return {
        backendUrl: process.env.VUE_APP_BACKEND_URL,
        dockeroo: process.env.BACKEND_API_URL,
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
    font-style: italic;
    font-size: 0.8em;
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
