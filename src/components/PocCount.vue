<template>
  <div id="poc-count">
    <div class="count-view">
        <button v-on:click="getPocCount">New Count</button>
        <span class="count" v-bind:class="{'count-p': isPositive(), 'count-n': !isPositive()}">
          {{ count }}
        </span>
        <div class="footnote">
          <a href="">Refresh</a> this page or click the button to get a new count. Count is fetched from the <a :href="backendHost+'/actuator/info'">backend</a> over
          <a :href="backendHost+'/swagger-ui.html'">REST</a>.
        </div>
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
    mounted() {
      console.log("mounted: #poc-count");
      this.getPocCount();
    },
    props: {
      count: Number
    },
    methods: {
      isPositive() {
        return this.count>0;
      },
      async getPocCount() {
        //console.log(this.xHost)
        try {
          const response = await fetch(this.backendHost + '/rest/v1/poc/random-count')
          const data = await response.json()
          this.$emit("count-updated", data);
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
</script>

<style scoped>
  #poc-count {
    margin-top: 50px;
  }
  button {
    background-color: lightgrey;
    color: blue;
    padding: 10px;
    border: none;
  }
  h3 {
    margin:0;
    margin-top:30px;
    border-top: dotted 0px grey;
    font-size:1.2em;
    color: grey;
  }
  .count-view {
    border-radius: 5px;
    border: solid 1px lightgrey;
    padding-left: 10px;
    text-align: left;
  }
  .footnote {
    color: grey;
    text-align:left;
    font-size: 0.8em;
  }
  .count {
    margin-left: 20px;
    font-size: 1.8em;
  }
  .count-p {
    color: green;
  }
  .count-n {
    color: red;
  }
</style>
