<template>
  <div id="depot-rand-work" class="depot-work">
    <div class="wk-header"><h5>Featured Work</h5></div>
    <div class="wk-title">{{ wkTitle }}</div>
    <div class="wk-author">by: {{ wkAuthor }}</div>
    <img v-bind:src="`data:image/jpeg;charset=utf-8;base64,${wkCover}`" class="depot-cover" alt="[WORK IMG]" />  
  </div>
</template>

<script>
export default {
  name: 'RandomWork',
  data() {
    return {
      endpoint: '/depot/work/featured'
    };
  },
  mounted() {
    this.getDepotWork()
  },
  props: {
    wkTitle: String,
    wkCover: String,
    wkAuthor: String
  },
  methods: {
    getDepotWork() {
      this.$api.fetchV1({ method:'get', path: this.endpoint }, { noLoader: true, callback: this.display });
    },
    display(result) {
      var author = result.data[0].author;
      //console.log(author);
      var work = result.data[0].work;
      //console.log(work);
      this.$emit("depot-work-updated", work, author)
    }
  }
}
</script>

<style scoped>
</style>
