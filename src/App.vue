<template>
  <div id="app" class="small-container">
    <h1>Booklink</h1>
    <div class="poc">proof of concept</div>
    <hr/>
    <poc-count :count="pocCount" />
    <hr/>
    <div class="footer env">VERSION: {{xVersion}}, ENVIRONMENT: {{xEnv}}, BRANCH: {{xBranch}}, HEAD: {{xCommit}}</div>
  </div>
</template>

<script>
  import Configuration from '@/util/configuration'
  import PocCount from '@/components/ProofOfConcept.vue'

  export default {
    name: 'app',
    components: {
      PocCount,
    },
    data() {
      return {
        xHost: Configuration.value('BACKEND_HOST'),
        xEnv: Configuration.value('RUNNING_ENV'),
        xVersion: process.env.VUE_APP_VERSION,
        xCommit: process.env.VUE_APP_GIT_SHORT_COMMIT_HASH,
        xBranch: process.env.VUE_APP_GIT_BRANCH,
        pocCount: 0
      }
    },
    mounted() {
      this.getPocCount()
    },
    methods: {
      async getPocCount() {
        console.log(this.xHost)
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
    margin-top: 100px;
  }
  .poc {
    text-align:right;
    font-size:0.8em;
    font-style:italic;
  }
  .footer {
    font-family:courier;
    font-size:0.8em;
    margin-top: 20px;
  }
  .env {
    float:left;
  }
  .git {
    float:right;
  }
</style>
