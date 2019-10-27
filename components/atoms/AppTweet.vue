<template>
  <div class="tweet__container">
    <div class="">
      アイコン
    </div>
    <div>
      メイン
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    }
    icon: {
      type: String,
      default: '',
    },
    tweet: {
      type: String,
      default: '',
    },
  }
}
</script>
<style lang='scss' scoped>
</style>
