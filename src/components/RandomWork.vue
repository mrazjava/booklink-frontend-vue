<template>
  <div v-if="fWork" id="depot-rand-work" class="depot-work">
    <div class="wk-header"><h5>Featured Work</h5></div>
    <div class="wk-author" v-bind:title="`${fAuthor.id}`">by: <a href="#" @click="dlgAuthor=true">{{ fAuthor.name }}</a></div>
    <img v-tooltip.left="{ ref: 'tooltipRef' }" v-bind:src="`${buildCoverImgSrc(fWork.imageMedium.graphics)}`" class="depot-cover" alt="[FEATURED WORK COVER]" />	
    <Modal v-model="dlgAuthor" v-bind:title="`${fAuthor.name}`" @before-open="`${fetchAuthorById(fAuthor.id)}`">
		<div class="dlg-author">
			<img v-if="dlgAuthorImg" v-bind:src="`${buildCoverImgSrc(dlgAuthorImg.graphics)}`" class="author-cover" v-bind:title="`${dlgAuthorImg.id}`" alt="[AUTHOR IMG]" />
			<div>{{ fAuthor.bio }}</div>
		</div> 
    </Modal>
    <div ref="tooltipRef" class="tooltip-content">
      <h5>{{fWork.id}}:{{fWork.imageMedium.id}}</h5>
      <hr/>
      {{fWork.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RandomWork',
  data() {
    return {
      dlgAuthor: false,
      dlgCoverId: false,
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
      var author = result.data[0].authors[0];
      //console.log(author);
      var work = result.data[0].work;
      //console.log(work);
      this.$emit("depot-work-updated", work, author)
    }
  }
}
</script>
<style>
 .vue-tooltip {
    background-color: #fcf3cf;
    color: black;
    padding: 10px;
 }
 .vue-tooltip hr {
    margin-top: 5px;
    padding-bottom: 5px;
 }
 .tooltip-arrow {
    border-bottom-color: blue;
 }
 .vm-btn-close {
 }
</style>
<style scoped>
 .dlg-author {
  height: 400px;
  overflow: scroll;
 }
 .author-cover {
  float:left;
  padding-right: 10px;
 }
</style>
