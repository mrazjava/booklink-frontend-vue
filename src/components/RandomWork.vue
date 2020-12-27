<template>
  <div id="depot-rand-work" class="depot-work">
    <div class="wk-header"><h5>Featured Work</h5></div>
    <div class="wk-title">{{ wkTitle }}</div>
    <div class="wk-author" v-bind:title="`${wkAuthor.id}`">by: <a href="#" @click="showModal=true">{{ wkAuthor.name }}</a></div>
    <img v-bind:src="`${getWorkCoverImg(wkCover.graphics)}`" class="depot-cover" v-bind:title="`${wkCover.id}`" alt="[TITLE COVER]" />
    <Modal v-model="showModal" v-bind:title="`${authorDlgTitle}`" @before-open="`${fetchAuthorById(wkAuthor.id)}`">
      TODO: display author
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'RandomWork',
  data() {
    return {
      showModal: false,
      fullAuthor: undefined,
      eptFeaturedWork: '/depot/work/featured',
      eptAuthorById: '/depot/author/'
    };
  },
  mounted() {
    this.fetchDepotWork()
  },
  props: {
    wkTitle: String,
    wkCover: Array[Object],
    wkAuthor: Array[Object]
  },
  computed: {
    authorDlgTitle : function() { return this.fullAuthor ? this.fullAuthor.name : '[AUTHOR NAME]'; }
  },
  methods: {
    getWorkCoverImg(data) {
      return 'data:image/webp;base64,' + data;
    },
    fetchAuthorById(authorId) {
      this.$api.fetchV1({ method:'get', path: this.eptAuthorById+authorId }, { noLoader: true, callback: this.updateAuthorDisplay });
    },
    fetchDepotWork() {
      this.$api.fetchV1({ method:'get', path: this.eptFeaturedWork }, { noLoader: true, callback: this.updateWorkDisplay });
    },
    updateAuthorDisplay(result) {
      //console.info(result.data);
      this.fullAuthor = result.data;
    },
    updateWorkDisplay(result) {
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
