<template>
  <div id="technical-info">
    <table :style="cssVars" class="TechInfo">
      <col class="TechInfo__col1" />
      <col class="TechInfo__col2" />
      <tr>
        <th class="TechInfo__th" colspan="2">Frontend</th>
      </tr>
      <tr>
        <td>Environment:</td>
        <td>{{techFeEnv}}</td>
      </tr>
      <tr>
        <td>version:</td>
        <td>{{techFeVersion}}</td>
      </tr>
      <tr>
        <td>branch:</td>
        <td>{{techFeBranch}}</td>
      </tr>
      <tr>
        <td>last commit:</td>
        <td>{{techFeCommit}}</td>
      </tr>
      <tr>
        <th class="TechInfo__th" colspan="2">Backend</th>
      </tr>
      <tr>
        <td>Environment:</td>
        <td>{{techBeEnv}}</td>
      </tr>
      <tr>
        <td>URL:</td>
        <td>{{techBeHost}}</td>
      </tr>
      <tr>
        <td>version:</td>
        <td>{{techBeVersion}}</td>
      </tr>
      <tr>
        <td>branch:</td>
        <td>{{techBeBranch}}</td>
      </tr>
      <tr>
        <td>last commit:</td>
        <td>{{techBeLastCommit}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Deployment from '@/deployment'

export default {
  name: 'TechnicalInfo',
  data() {
    const FETCH_LABEL = "checking ..."
    return {
      techFeEnv: Deployment.value('FE_DEPLOY_ENV'),
      techFeVersion: process.env.VUE_APP_VERSION,
      techFeCommit: process.env.VUE_APP_GIT_SHORT_COMMIT_HASH,
      techFeBranch: process.env.VUE_APP_GIT_BRANCH,
      techBeHost: Deployment.value('FE_DEPLOY_BE_HOST'),
      techBeEnv: FETCH_LABEL,
      techBeVersion: FETCH_LABEL,
      techBeBranch: FETCH_LABEL,
      techBeLastCommit: FETCH_LABEL
    };
  },
  mounted() {
    this.fetchBackendInfo();
  },
  props: {
  },
  computed: {
    cssVars() {
      return {
        '--bg-header': global.CLR_BG_TH,
        '--fg-header': global.CLR_FG_TH
      }
    }
  },
  methods: {
    fetchBackendInfo() {
      this.$api.fetch({ method:'get', path: '/actuator/info' }, { callback: this.fetchBeCallback });
    },
    fetchBeCallback(response) {
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

<style lang="scss" scoped>
#technical-info {
  margin-left: 20px;
  margin-right: 20px;
}
.TechInfo {
  font-family: "Courier New", Courer;
  width: 100%;
  &__col1 {
    width: 175px;
  }
  &__th {
    color: var(--fg-header);
    background-color: var(--bg-header);
  }
}
.TechInfo th, td {
  padding: 3px;
  border: solid 0px black;
}
</style>
