<template>
  <div id="poc-count">
    <button v-on:click="getPocCount">New Count</button>
    <span class="count" v-bind:class="{'count-p': isPositive(), 'count-n': !isPositive()}">
      {{ count }}
    </span>
    <div class="footnote">
      Does not requrie authentication or any roles.
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
        this.$emit("count-updated", result.data);
      })
    }
  }
}
</script>

<style scoped>
#poc-count {
  border-radius: 5px;
  border: solid 1px lightgrey;
  padding-left: 10px;
  text-align: left;
}
button {
  background-color: lightgrey;
  color: blue;
  padding: 10px;
  border: none;
  width: 100px;
}
h3 {
  margin:0;
  margin-top:30px;
  border-top: dotted 0px grey;
  font-size:1.2em;
  color: grey;
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
