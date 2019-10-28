<template>
  <div class="cover">
    <img class="cover__img" :style="{ 'filter': 'blur('+scrollY/30+'px)' }" :src="`/tweet/${fileName}.jpg`">
  </div>
</template>
<script>
export default {
  props: {
    fileName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      scrollY: 0,
    }
  },
}
</script>
<style lang='scss' scoped>
.cover {
  overflow: hidden;
  width: 100%;
  height: 140px;
  background: #000;

  &__img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }
}
</style>
