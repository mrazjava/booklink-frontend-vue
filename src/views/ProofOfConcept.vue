<template>
  <layout name="Layout">
    <div class="ProofOfConcept">
      <h2>Proof of Concept</h2>
      <poc-count :count="pocCount" @count-updated="updateCount" />
    </div>
  </layout>
</template>

<script>
import Layout from '@/layouts/Layout'
import PocCount from '@/components/PocCount'

export default {
  name: 'ProofOfConcept',
  components: {
    Layout,
    PocCount,
  },
  data() {
    return {
      pocCount: 0
    }
  },
  methods: {
    updateCount(newValue) {
      console.log("updateCount: " + newValue);
      this.pocCount = newValue;
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
  max-width: 680px;
}
</style>
