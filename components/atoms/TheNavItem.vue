<template>
  <li :ref="id" :class="{ 'is-active': current === index }" @click="clickItem()">
    <div ref="wave" class="wave" :class="{ 'is-animation': isAnimation }"></div>
    {{ text }}
  </li>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    current: {
      type: Number,
      default: 0,
    },
    index: {
      type: Number,
      default: 0,
    },
    text: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      isAnimation: false,
    }
  },
  methods: {
    async clickItem() {
      this.isAnimation = true;
      this.$emit('fetchIndex', this.index);
      await this.$delay(300)
      this.isAnimation = false;
    }
  },
  mounted() {
    this.$emit('input', this.$refs[this.id].getBoundingClientRect().width);
  },
}
</script>
<style lang='scss' scoped>
.wave {
  position: absolute;
  top: -32px; /* (button height - height) / 2 */
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, .2);
  border-radius: 100%;
  transition: all 0.2s ease-in;
  opacity: 0;

  &.is-animation {
    animation: scaleout .3s 1 ease-out;
  }
}

@keyframes scaleout {
  0% {
    opacity: 1;
    transform: scale(0.0);
  } 100% {
    transform: scale(1.0);
    opacity: 0;
  }
}
</style>
