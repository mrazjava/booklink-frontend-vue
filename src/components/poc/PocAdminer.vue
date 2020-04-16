<template>
  <div id="poc-adminer" class="poc-element">
    <div class="poc-title">
      {{ endpoint }} <span class="poc-title-desc">Randomly generated fake words (min 1, max 10), each in length between 3 and 10 characters</span>
    </div>
    <button v-on:click="fetchAdminMessage">Pull Msg</button>
    <span class="poc-display">
      {{ msg }}
    </span>
    <div class="poc-footnote">
      Requires LOGIN *and* the ADMIN role.
    </div>
  </div>
</template>

<script>
export default {
  name: 'PocAdminer',
  data() {
    return {
      endpoint: '/poc/secured/admin'
    };
  },
  mounted() {
    this.fetchAdminMessage();
  },
  props: {
    msg: String
  },
  methods: {
    fetchAdminMessage() {
      this.$api.fetch({ method:'get', path: this.endpoint }, { callback: this.updateMessage });
    },
    updateMessage(response) {
      this.$emit("msg-updated", response.data)
    }
  }
}
</script>

<style scoped>
</style>
