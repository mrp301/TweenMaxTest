<template>
  <div class="cover">
    <img class="cover__img" :src="`/cover/${fileName}.jpg`">
  </div>
</template>
<script>
export default {
  props: {
    fileName: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang='scss' scoped>
.cover {
  width: 100%;
  height: 200px;
  background: #000;

  &__img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }
}
</style>
