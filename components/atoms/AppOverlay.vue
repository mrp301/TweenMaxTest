<template>
  <div
    class="overlay"
    :class="{ 'is-show': show }"
    @click="modalClose()"></div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    modalClose() {
      //親にイベント送ってモーダル消す
      //this.show = false
    }
  }
}
</script>
<style scoped>
.overlay {
  z-index: 1000;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: .2;
  transition: all 0.2s linear 0s;
}

.is-show {
  display: block;
}
</style>
