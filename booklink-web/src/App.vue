<template>
  <div id="app" class="small-container">
    <h1>Booklink</h1>
    <hr/>
    <book-info :count="countik" />
    <hr/>
    <div style="text-align:right;">Proof of concept.</div>
  </div>
</template>

<script>
  import BookInfo from '@/components/BookInfo.vue'

  export default {
    name: 'app',
    components: {
      BookInfo,
    },
    data() {
      return {
        countik: 0
      }
    },
    mounted() {
      this.getCountTest()
    },
    methods: {
      async getCountTest() {
        try {
          const response = await fetch('http://localhost:8080/rest/v1/book/count-all')
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
