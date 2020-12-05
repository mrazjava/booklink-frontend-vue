<template>
  <div class="Content Home">
    <random-work :wkTitle="workTitle" :wkCover="workCover" :wkAuthor="workAuthor" @depot-work-updated="updateDepotWork" />
    <div class="Home__intro">
        Blog on books with browsable cross reference.
    </div>
    <h1 class="Home__construction">! Under Construction</h1>
    <p>
      We are actively working on <strong>booklinktrove</strong> but it is not ready for general release yet. While
      we do not have a specific timeframe, announcements will follow as we get closer to the finish line. 
      The <a href="https://pre.booklinktrove.com">pre-release</a> environment is where we host the live preview.
    </p>
    <p>
      Release dates, and notes on the new features which we constantly add can be viewed on <a href="https://github.com/mrazjava/booklink-frontend-vue/releases">github</a>.
    </p>
    <p>
      Once live, we will operate at <a href="https://www.booklinktrove.com">www.booklinktrove.com</a>.
      Final version will be 1.0.0
    </p>
  </div>
</template>

<script>
import RandomWork from '@/components/RandomWork'

export default {
  name: 'Home',
  components: {
    RandomWork
  },
  data() {
    return {
      workTitle: 'title',
      workCover: 'cover',
      workAuthor: 'author'
    }
  },
  methods: {
    updateDepotWork(work, author) {
      this.workTitle = work.title;
      this.workAuthor = author.name;
      this.workCover = work.imageMedium.graphics;
    }
  }
};
</script>

<style lang="scss" scoped>
  .Home {
    &__intro {
      margin-top: 40px;
      font-size: 1.2em;
    }
    &__construction {
      font-size: 2em;
      margin-top: 20px;
      color: #DE4A2B;
    }
  }
</style>
<style type="text/css">
  .depot-work {
    float: right;
    padding: 10px;
    margin-left: 10px;
    max-width: 300px;
  }
  .wk-title {
    color: grey;
  }
</style>
