<template>
  <div>
    <h2>残タスク</h2>
    <ul>
      <li>ツイートとかのコンポーネント作る</li>
      <li>トランジション、切り替え時のアニメーション作る</li>
      <li>よこすワイプのメニュー作る</li>
      <li>メニュー系なんか作る</li>
    </ul>
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
