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

      <h2>Amet sit</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        amet.
      </p>
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
