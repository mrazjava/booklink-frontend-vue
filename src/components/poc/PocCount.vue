<template>
  <div id="poc-count" class="poc-element">
    <div class="poc-title">
      {{ endpoint }} <span class="poc-title-desc">Random value within the range of java.lang.Integer</span>
    </div>
    <button v-on:click="getPocCount">New Count</button>
    <span class="poc-display" v-bind:class="{'count-p': isPositive(), 'count-n': !isPositive()}">
      {{ count }}
    </span>
    <div class="poc-footnote">
      Does not requrie authentication or any roles.
    </div>
  </div>
</template>

<script>
export default {
  name: 'PocCount',
  data() {
    return {
      endpoint: '/poc/random-count'
    };
  },
  mounted() {
    this.getPocCount()
  },
  props: {
    count: Number
  },
  methods: {
    isPositive() {
      return this.count>0;
    },
    getPocCount() {
      this.$api.fetch({ method:'get', path: this.endpoint }, { callback: this.updateCount });
    },
    updateCount(result) {
      this.$emit("count-updated", result.data)
    }
  }
}
</script>

<style scoped>
.count-p {
  color: green;
}
.count-n {
  color: red;
}
</style>
