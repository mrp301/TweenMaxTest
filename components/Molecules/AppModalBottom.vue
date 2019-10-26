<template>
  <div>
    <div class="modal-bottom">
      <p>ここslotで自由にカスタマイズできるようにしたいよね</p>
    </div>
    <app-overlay :show="show" />
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  }
}
</script>
<style>
.modal-bottom {
  z-index: 1001;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  background: #fff;
}
</style>
