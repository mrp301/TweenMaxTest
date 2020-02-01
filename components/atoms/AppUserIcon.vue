<template>
  <div class="userIcon">
    <img :src="`/images/user-icon/${fileName}.png`">
  </div>
</template>
<script>
export default {
  props: {
    fileName: {
      type: String,
      default: 'default'
    },
  }
}
</script>
<style lang="scss" scoped>
.userIcon {
  overflow: hidden;
  object-fit: cover;
  border-radius: 50%;

  img {
    width: 100%;
  }
}
</style>