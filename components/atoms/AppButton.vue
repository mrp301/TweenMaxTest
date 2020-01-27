<template>
  <button
    id="button"
    ref="button"
    @click="clickBtton"
    class="c-button"
    :class="`c-button--${type} is-${state}`"
  >
    <div ref="wave" class="wave" :class="{ 'is-animation': isAnimation }"></div>
    <slot/>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'circle',
    },
    state: {
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
    async clickBtton(event) {
      this.isAnimation = true;
      //this.clickPositionX = event.layerX;
      await this.$delay(300)
      this.isAnimation = false;
    },
  },
}
</script>
<style lang='scss' scoped>
.c-button {
  display: inline-block;
  font-weight: bold;
  font-size: 12px;
  background: $main_color;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  padding: 0 10px;
  border: 0;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12), 0 3px 1px -2px rgba(0, 0, 0, .2);

  &:focus {
    outline: none;
  }

  &--circle {
    padding: 5px 18px;
    font-size: 14px;
    color: $main_color;
    background-color: transparent;
    border: solid 1px $main_color;
    border-radius: 52px;

    &:hover {
      background: rgba(#fff, .05);
    }

    &.is-active {
      color: #fff;
      background-color: $main_color;
    }

    &.is-danger {
      border: solid 1px #ca2055;
      color: #fff;
      background-color: #ca2055;
    }
  }

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
}

/* Anmiation from http://tobiasahlin.com/spinkit/ */
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
