<template>
  <div class="ProofOfConcept">
    <h2>Proof of Concept</h2>
    <div class="poc-header">
      <a href="">Refresh</a> this page or click a button to get fresh data. Data for each demo is fetched from the <a :href="this.$BEHOST+'/actuator/info'">backend</a> over
      <a :href="this.$BEHOST+'/swagger-ui.html'">REST</a>.
    </div>
    <poc-count class="poc-demo" :count="pocCount" @count-updated="updateCount" />
    <poc-adminer class="poc-demo" :msg="adminerMsg" @msg-updated="updateAdminerMsg" />
  </div>
</template>

<script>
import PocCount from '@/components/poc/PocCount'
import PocAdminer from '@/components/poc/PocAdminer'

export default {
  name: 'ProofOfConcept',
  components: {
    PocCount,
    PocAdminer
  },
  data() {
    return {
      pocCount: 0,
      adminerMsg: '?'
    }
  },
  methods: {
    updateCount(newValue) {
      console.log("updateCount: " + newValue);
      this.pocCount = newValue;
    },
    updateAdminerMsg(newValue) {
      console.log("adminerMsg: " + newValue);
      this.adminerMsg = newValue;
    }
  }
}
</script>

<style>
button {
  background: #009435;
  border: 1px solid #009435;
}
.ProofOfConcept {
  margin:0;
  padding:0;
}
.poc-title {
}
.poc-title-desc {
  float: right;
  margin-right: 5px;
  color: grey;
}
.poc-header {
  margin-top: 20px;
}
.poc-demo {
  margin-top: 10px;
}
</style>
