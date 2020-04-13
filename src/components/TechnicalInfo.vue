<template>
  <div id="technical-info">
    <table>
      <col class="techInfo-col1" />
      <col class="techInfo-col2" />
      <tr>
        <td>FE Environment:</td>
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
      <tr>
        <td>BE Environment:</td>
        <td>{{techBeEnv}}</td>
      </tr>
      <tr>
        <td>BE version:</td>
        <td>{{techBeVersion}}</td>
      </tr>
      <tr>
        <td>BE branch:</td>
        <td>{{techBeBranch}}</td>
      </tr>
      <tr>
        <td>BE last commit:</td>
        <td>{{techBeLastCommit}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TechnicalInfo',
  data() {
    const FETCH_LABEL = "checking ..."
    return {
      techFeEnv: process.env.VUE_APP_ENV,
      techFeVersion: process.env.VUE_APP_VERSION,
      techFeCommit: process.env.VUE_APP_GIT_SHORT_COMMIT_HASH,
      techFeBranch: process.env.VUE_APP_GIT_BRANCH,
      techBeEnv: FETCH_LABEL,
      techBeVersion: FETCH_LABEL,
      techBeBranch: FETCH_LABEL,
      techBeLastCommit: FETCH_LABEL
    };
  },
  mounted() {
    this.getBackendInfo();
  },
  props: {
  },
  methods: {
    async getBackendInfo() {
      const response = await this.$http.get(
        this.$BEHOST + '/actuator/info', {
          headers: {
          }
        });
        //console.log(response);
        const result = response.data;
        this.techBeEnv = result.build.environment;
        this.techBeVersion = result.build.maven.version;
        this.techBeBranch = result.git.branch;
        this.techBeLastCommit = result.git.commit.id;
      }
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
