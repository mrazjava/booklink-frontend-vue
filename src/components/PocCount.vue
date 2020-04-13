<template>
  <div id="poc-count">
    <div class="count-view">
      <button v-on:click="getPocCount">New Count</button>
      <span class="count" v-bind:class="{'count-p': isPositive(), 'count-n': !isPositive()}">
        {{ count }}
      </span>
      <div class="footnote">
        <a href="">Refresh</a> this page or click the button to get a new count. Count is fetched from the <a :href="this.$BEHOST+'/actuator/info'">backend</a> over
        <a :href="this.$BEHOST+'/swagger-ui.html'">REST</a>.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PocCount',
  data() {
    return {
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
    getPocCount() {
      this.$http.get(this.$BEHOST + '/rest/v1/poc/random-count')
      .then(result => {
        console.log(result);
        this.$emit("count-updated", result.data);
      })
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
