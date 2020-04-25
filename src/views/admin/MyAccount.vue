<template>
  <div class="MyAccount">
    <h2>My Account</h2>
    <p>
      Last Login Date: [{{ getLastLogin }}]
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
    getUserRoles: function() { return this.$store.getters.userRoles },
    getLastLogin: function() { return this.$store.getters.userLastLogin }
  },
};
</script>

<style lang="scss">
</style>
