<template>
  <div id="poc-foo" class="poc-element">
    <div class="poc-title">
      {{ endpoint }} <span class="poc-title-desc">Random alphanumeric word between 2 and 21 characters in length</span>
    </div>
    <button v-on:click="getPocWord">New Word</button>
    <span class="poc-display">
      {{ word }}
    </span>
    <div class="poc-footnote">
      Requires LOGIN *and* one of the roles: FOO, DETECTIVE
    </div>
  </div>
</template>

<script>
export default {
  name: 'PocFoo',
  data() {
    return {
      endpoint: '/poc/secured/foo'
    };
  },
  mounted() {
    this.getPocWord()
  },
  props: {
    word: String
  },
  methods: {
    getPocWord() {
      this.$api.fetchV1({ method:'get', path: this.endpoint }, { noLoader: true, callback: this.updateWord });
    },
    updateWord(result) {
      this.$emit("word-updated", result.data)
    }
  }
}
</script>

<style scoped>
</style>
