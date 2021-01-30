<template>
  <div class="Content Home">
    <random-work :fWork="featuredWork" :fAuthor="featuredAuthor" @depot-work-updated="updateDepotWork" />
    <div class="Home__intro">
        Blog on books with browsable cross reference.
        <p/>
        <autocomplete
          :search="searchWorks"
          placeholder="Search Works"
          aria-label="Search Works"
          :get-result-value="getResultValue"
          @submit="onSubmit"></autocomplete>
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
    },
    searchWorks(input) {

          return new Promise((resolve) => {
            if (input.length < 3) {
              return resolve([])
            }

            resolve(["abc", "def", "ghi"])

            //fetch(url)
            //  .then((response) => response.json())
            //  .then((data) => {
            //    resolve(data.query.search)
        //})
      })
    },
    getResultValue(result) {
      return "abrakadabra";
    },
    onSubmit(result) {
      alert('boo');
    }
  }
};
</script>

<style type="text/css">
.autocomplete-input {
  width: 50%;
}
.autocomplete-result-list {
  width: 50% !important;
}
</style>
<style lang="scss" scoped>
  .sandbox {
    font-size:0.8em;
  }
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
