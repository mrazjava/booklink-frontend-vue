<template>
  <div class="MyAccount">
    <h2>My Account</h2>
    <p>
      Roles: {{ getUserRoles }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'MyAccount',
  data() {
    return {
    }
  },
  computed: {
    getUserRoles: function() { return this.$store.getters.userRoles }
  },
};
</script>

<style lang="scss">
</style>
