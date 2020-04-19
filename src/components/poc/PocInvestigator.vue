<template>
  <div id="poc-investigator" class="poc-element">
    <div class="poc-title">
      {{ endpoint }} <span class="poc-title-desc">Randomly generated fake words (min 1, max 10), each in length between 3 and 10 characters</span>
    </div>
    <button v-on:click="fetchInvestigatorMessage">Pull Msg</button>
    <span class="poc-display">
      {{ msg }}
    </span>
    <div class="poc-footnote">
      Requires LOGIN *and* the DETECTIVE role.
    </div>
  </div>
</template>

<script>
export default {
  name: 'PocInvestigator',
  data() {
    return {
      endpoint: '/poc/secured/investigation'
    };
  },
  mounted() {
    this.fetchInvestigatorMessage();
  },
  props: {
    msg: String
  },
  methods: {
    fetchInvestigatorMessage() {
      this.$api.fetchV1({ method:'get', path: this.endpoint }, { callback: this.updateMessage });
    },
    updateMessage(response) {
      this.$emit("msg-updated", response.data)
    }
  }
}
</script>

<style scoped>
</style>
