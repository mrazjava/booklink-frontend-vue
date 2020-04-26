<template>
  <div id="poc-hello" class="poc-element">
    <div class="poc-title">
      {{ endpoint }} <span class="poc-title-desc">Friendly, but dummy greeting which sometimes scrambles your login :-)</span>
    </div>
    <button v-on:click="getPocHello">Say Hello</button>
    <span class="poc-display">
      {{ hello }}
    </span>
    <div class="poc-footnote">
      Requires LOGIN only
    </div>
  </div>
</template>

<script>
export default {
  name: 'PocHello',
  data() {
    return {
      endpoint: '/poc/secured/hello'
    };
  },
  mounted() {
    this.getPocHello()
  },
  props: {
    hello: String
  },
  methods: {
    getPocHello() {
      this.$api.fetchV1({ method:'get', path: this.endpoint }, { noLoader: true, callback: this.updateHello });
    },
    updateHello(result) {
      this.$emit("hello-updated", result.data)
    }
  }
}
</script>

<style scoped>
.poc-display {

}
</style>
