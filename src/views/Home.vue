<template>
  <div class="Content Home">
    <random-work :fWork="featuredWork" :fAuthor="featuredAuthor" @depot-work-updated="updateDepotWork" />
    <div class="Home__intro">
        Blog on books with browsable cross reference.
    </div>
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
      featuredWork: undefined,
      featuredAuthor: undefined
    }
  },
  methods: {
    updateDepotWork(work, author) {
      this.featuredWork = work;
      this.featuredAuthor = author;
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
