<template>
  <div id="technical-info">
    <table>
      <col class="techInfo-col1" />
      <col class="techInfo-col2" />
      <tr>
        <td>Environment:</td>
        <td>{{techFeEnv}}</td>
      </tr>
      <tr>
        <td>FE version:</td>
        <td>{{techFeVersion}}</td>
      </tr>
      <tr>
        <td>FE branch:</td>
        <td>{{techFeBranch}}</td>
      </tr>
      <tr>
        <td>FE last commit:</td>
        <td>{{techFeCommit}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Configuration from '@/util/configuration'

  export default {
    name: 'TechnicalInfo',
    data() {
      return {
        backendHost: Configuration.value('BACKEND_HOST'),
        techFeEnv: Configuration.value('RUNNING_ENV'),
        techFeVersion: process.env.VUE_APP_VERSION,
        techFeCommit: process.env.VUE_APP_GIT_SHORT_COMMIT_HASH,
        techFeBranch: process.env.VUE_APP_GIT_BRANCH,
      };
    },
    mounted() {
    },
    props: {
    },
    methods: {
    }
  }
</script>

<style scoped>
  table, th, td {
    border: solid 0px black;
  }
  table {
    margin-left: 20px;
    font-family: "Courier New", Courer;
  }
  td {
    padding: 0;
  }
  .techInfo-col1 {
    width: 220px;
  }
</style>
