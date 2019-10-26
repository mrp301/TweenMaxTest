<template>
  <header class="header">
    <div class="header__name">{{ userName }}</div>
    <div>メニュー</div>
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
  }
}
</style>
