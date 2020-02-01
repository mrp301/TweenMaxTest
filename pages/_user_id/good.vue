<template>
  <div>
    <app-button>フォロー</app-button><br/><br/>
    <app-button state="active">フォロー中</app-button><br/><br/>
    <app-button state="danger">フォロー解除</app-button><br/><br/>
  </div>
</template>
<script>
export default {
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
}
</script>

<style lang='scss' scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
