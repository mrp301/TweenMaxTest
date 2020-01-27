<template>
  <div :id="tweet.id" class="tweet">
    <div class="tweet__container">
      <div class="tweet__iconContainer">
        <nuxt-link :to="{ name: `user_id`, params: { user_id: tweet.user.id }}">
          <div :class="tweet.user.icon ? 'tweet__icon' : 'tweet__icon--default'">
            <img :src="`/images/user-icon/${tweet.user.icon}.png`">
          </div>
        </nuxt-link>
      </div>
      <div class="tweet__body">
        <div class="tweet__user">
          <nuxt-link class="tweet__user--name" :to="{ name: `user_id`, params: { user_id: tweet.user.id }}">
            {{ tweet.user.user_name }}
          </nuxt-link>
          <span class="tweet__user--userid">@{{ tweet.user.id }} {{ $dayjs(tweet.created_at).format('YYYY年MM月DD日') }}</span>
        </div>
        <div class="tweet__text">{{ tweet.content }}</div>
        <!-- <div class="tweet__mediaContainer">
          <div v-if="data.media" :ref="data.id" class="tweet__media"><img :src="`/tweet/${data.media}.jpg`"></div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tweet: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    mediaView(id) {
      this.$refs[id].classList.add('tweet__media--isActive');
    }
  }
}
</script>
<style lang='scss' scoped>
.tweet {
  font-size: 14px;
  color: #fff;

  &:hover {
    background: rgba(#fff, .05);
  }

  &__container {
    display: flex;
    padding: 10px 18px 10px 12px;
    border-bottom: solid 1px $border_color;
  }

  &__iconContainer {
    width: 53px;
    flex: 0 0 auto;
  }

  &__icon {
    overflow: hidden;
    object-fit: cover;
    border-radius: 50%;
    width: 40px;
    height: 40px;

    &--default {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      background: #6b6b6b;
    }

    & > img {
      width: 100%;
    }
  }

  &__body {
    width: calc( 100% - 53px );
  }

  &__user {
    white-space: nowrap;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80%;

    &--name {
      font-weight: bold;
      margin-right: 8px;
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    &--userid {
      color: $gray_color;
    }
  }

  &__mediaContainer {
    margin: 8px 0;
  }

  &__media {
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 25%;
    border: solid 1px $border_color;
    border-radius: 10px;
    transition: all 0.5s ease-in;

    &--isActive {
      overflow: visible;
      z-index: 2000;
      position: fixed;
      top: 0;
      left: 0;
      border-radius: 0;
      width: 100%;
    }

    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
