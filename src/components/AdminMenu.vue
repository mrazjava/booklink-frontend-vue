<template>
  <div class="AdminMenu">
    <router-link to="/my-account">My Account</router-link> ::
    <router-link to="/my-account/reviews">Reviews</router-link>
  </div>
</template>

<script>
export default {
  name: 'AdminMenu',
};
</script>

<style lang="scss">
.AdminMenu {
  border-bottom: dotted 1px lightgrey;
  padding-bottom: 5px;
  padding-left: 5px;
  margin-bottom: 10px;
  text-align: left;
  color: grey;
  &__title {
    margin-right: 10px;
  }
}
</style>
