<template>
    <layout name="LayoutDefault">
  <div id="app" class="small-container">
    <h3>Proof of Concept</h3>
    <poc-count :count="pocCount" />
  </div>
    </layout>
</template>

<script>
import Layout from '@/layouts/Layout'
import Configuration from '@/util/configuration'
import PocCount from '@/components/PocCount'

  export default {
    name: 'app',
    components: {
      Layout,
      PocCount,
    },
    data() {
      return {
        xHost: Configuration.value('BACKEND_HOST'),
        pocCount: 0
      }
    },
    mounted() {
      this.getPocCount()
    },
    methods: {
      async getPocCount() {
        //console.log(this.xHost)
        try {
          const response = await fetch(this.xHost + '/rest/v1/poc/random-count')
          const data = await response.json()
          this.pocCount = data
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }
  .small-container {
    max-width: 680px;
    text-align: center;
  }
</style>