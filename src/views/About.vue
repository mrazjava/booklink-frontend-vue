<template>
  <layout name="Layout">
    <div class="About">
      <h2>About</h2>
      <p>
        Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>

      <h2 id="headerTech">Technical Info</h2>
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
  </layout>
</template>

<script>
import Layout from '@/layouts/Layout';
import Configuration from '@/util/configuration'

export default {
  name: `About`,
  components: {
    Layout,
  },
  data() {
    return {
      techFeEnv: Configuration.value('RUNNING_ENV'),
      techFeVersion: process.env.VUE_APP_VERSION,
      techFeCommit: process.env.VUE_APP_GIT_SHORT_COMMIT_HASH,
      techFeBranch: process.env.VUE_APP_GIT_BRANCH,
    };
  },
};
</script>

<style lang="scss">
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
  #headerTech {
    margin-bottom:10px;
  }
</style>
