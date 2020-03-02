<template>
  <div id="app" class="small-container">
    <h1>Booklink</h1>
    <pre style="white-space:pre-line;margin-bottom:-5px;text-align:left;">
        Environment: [{{ RUNNING_ENV }}]
        Backend URL: [<a :href="BACKEND_HOST">{{ BACKEND_HOST }}</a>"]
    </pre>
    <hr/>
    <book-info :count="countik" />
    <hr/>
    <div style="text-align:right;">Proof of concept.</div>
  </div>
</template>

<script>
  import Configuration from '@/util/configuration'
  import BookInfo from '@/components/BookInfo.vue'

  export default {
    name: 'app',
    components: {
      BookInfo,
    },
    data() {
      return {
        RUNNING_ENV: Configuration.value('runningEnv'),
        BACKEND_HOST: Configuration.value('backendHost'),
        countik: 0
      }
    },
    mounted() {
      this.getCountTest()
    },
    methods: {
      async getCountTest() {
        console.log(process.env.VUE_APP_BACKEND_URL)
        try {
          const response = await fetch(process.env.VUE_APP_BACKEND_URL + '/rest/v1/book/count-all')
          const data = await response.json()
          this.countik = data
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
