<template>
  <header class="header">
    <div >
      <nuxt-link
        class="header__name"
        :to="{ name: 'user_id', params: { user_id: this.$store.state.userId }}"
      >
        home
      </nuxt-link>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    userName: {
      type: String,
      default: '',
    }
  }
}
</script>
<style lang='scss' scoped>
.header {
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px $border_color;
  width: 100%;
  padding: 10px;
  background: $base_color;

  &__name {
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
