<template>
  <div id="poc-bar" class="poc-element">
    <div class="poc-title">
      {{ endpoint }} <span class="poc-title-desc">Random alphabetic text always 15 characters long</span>
    </div>
    <button v-on:click="getPocText">New Text</button>
    <span class="poc-display">
      {{ text.toUpperCase() }}
    </span>
    <div class="poc-footnote">
      Requires LOGIN *and* one of the roles: BAR, ADMIN
    </div>
  </div>
</template>

<script>
export default {
  name: 'PocBar',
  data() {
    return {
      endpoint: '/poc/secured/bar'
    };
  },
  mounted() {
    this.getPocText()
  },
  props: {
    text: String
  },
  methods: {
    getPocText() {
      this.$api.fetch({ method:'get', path: this.endpoint }, { callback: this.updateText });
    },
    updateText(result) {
      this.$emit("text-updated", result.data)
    }
  }
}
</script>

<style scoped>
</style>
