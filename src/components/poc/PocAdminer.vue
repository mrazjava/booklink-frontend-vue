<template>
  <div id="poc-adminer">
    <div class="poc-title">
      {{ endpoint }} <span class="poc-title-desc">Random generated words</span>
    </div>
    <button v-on:click="fetchAdminMessage">Pull Msg</button>
    <span class="poc-adm-msg">
      {{ msg }}
    </span>
    <div class="poc-adm-footnote">
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
#poc-adminer {
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
.poc-adm-footnote {
  color: grey;
  text-align:left;
  font-size: 0.8em;
}
.poc-adm-msg {
  margin-left: 20px;
  font-size: 1.6em;
}
</style>
