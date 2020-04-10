<template>
    <layout name="LayoutDefault">
  <div id="app" class="small-container">
    <h1>Proof of Concept</h1>
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
  h1 {
    text-align:left;
    font-size:1.5em;
    margin:0;
  }
  button {
    background: #009435;
    border: 1px solid #009435;
  }
  .small-container {
    margin:0;
    padding:0;
    max-width: 680px;
    text-align: center;
  }
</style>