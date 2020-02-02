<template>
  <div ref="post" v-show="isActive" class="post" :class="{ 'is-slidein': isActive }">
    <div class="post__head">
      <div class="post__prev" @click="close()"></div>
      <app-button @btn-click="submit" :state="!validate ? 'disabled' : 'active'" :disabled="!validate" >ツイート</app-button>
    </div>
    <div class="post__body">
      <textarea v-model="tweetText" placeholder="いまどうしてる？"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tweetText: '',
    }
  },
  computed: {
    validate() {
      return this.tweetText ? true : false;
    }
  },
  methods: {
    close() {
      this.tweetText = '';
      this.$emit('postclose');
    },
    submit() {
      console.log("あああ");
      if (this.validate) {
        this.$emit('post-tweet', this.tweetText);
        this.tweetText = '';
        this.$emit('postclose');
      }
    }
  },
}
</script>
<style lang='scss' scoped>
.post {
  transition: all .5s;
  position: fixed;
  top: 100vh;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3000;
  background: $base_color;

  &__head {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: solid 1px $border_color;
  }

  &__body {
    height: 100%;
  }

  &__prev {
    margin: 9px 0 0 8px;
    width: 12px;
    height: 12px;
    transform: rotate(-135deg);
    border-top: solid 2px $main_color;
    border-right: solid 2px $main_color;
  }

  &.is-slidein {
    animation: slidein .3s 1 ease-out forwards;
  }

  @keyframes slidein {
    0% {
      top: 100vh;
    } 100% {
      top: 0;
    }
  }

  &.is-slideout {
    animation: slideout .3s 1 ease-out forwards;
  }

  @keyframes slideout {
    0% {
      top: 0vh;
    } 100% {
      top: 100vh;
    }
  }

  textarea {
    color: $text_color;
    padding: 3px 10px;
    font-size: 16px;
    width: 100%;
    height: 100%;
    background: $base_color;
    border: 0;

    &:focus {
      outline: none;
    }
  }
}
</style>
