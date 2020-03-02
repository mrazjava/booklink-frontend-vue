<template>
  <div id="app" class="small-container">
    <h1>Booklink</h1>
    <div class="poc">proof of concept</div>
    <hr/>
    <book-info :count="countik" />
    <hr/>
    <div class="env">ENVIRONMENT: {{xEnv}}</div>
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
        xHost: Configuration.value('BACKEND_HOST'),
        xEnv: Configuration.value('RUNNING_ENV'),
        countik: 0
      }
    },
    mounted() {
      this.getCountTest()
    },
    methods: {
      async getCountTest() {
        console.log(this.xHost)
        try {
          const response = await fetch(this.xHost + '/rest/v1/book/count-all')
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
    margin-top: 100px;
  }
  .poc {
    text-align:right;
    font-size:0.8em;
    font-style:italic;
  }
  .env {
    float:left;
    font-family:courier;
    font-size:0.8em;
    margin-top: 20px;
  }
</style>
