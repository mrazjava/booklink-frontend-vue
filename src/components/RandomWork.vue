<template>
  <div v-if="fWork" id="depot-rand-work" class="depot-work">
    <div class="wk-header"><h5>Featured Work</h5></div>
    <div class="wk-title">{{ fWork.title }}</div>
    <div class="wk-author" v-bind:title="`${fAuthor.id}`">by: <a href="#" @click="showModal=true">{{ fAuthor.name }}</a></div>
    <img v-bind:src="`${buildCoverImgSrc(fWork.imageMedium.graphics)}`" class="depot-cover" v-bind:title="`${fWork.imageMedium.id}`" alt="[FEATURED WORK COVER]" />
    <Modal v-model="showModal" v-bind:title="`${fAuthor.name}`" @before-open="`${fetchAuthorById(fAuthor.id)}`">
		<img v-if="dlgAuthorImg" v-bind:src="`${buildCoverImgSrc(dlgAuthorImg.graphics)}`" class="depot-cover" v-bind:title="`${dlgAuthorImg.id}`" alt="[AUTHOR IMG]" />
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'RandomWork',
  data() {
    return {
      showModal: false,
      dlgAuthorImg: undefined,
      eptFeaturedWork: '/depot/work/featured',
      eptAuthorById: '/depot/author/'
    };
  },
  mounted() {
    this.fetchDepotWork()
  },
  props: {
    fWork: Array[Object],
    fAuthor: Array[Object]
  },
  computed: {
  },
  methods: {
    buildCoverImgSrc(data) {
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
      this.dlgAuthorImg = result.data.imageMedium;
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
