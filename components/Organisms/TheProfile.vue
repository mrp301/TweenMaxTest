<template>
  <div class="profile">
    <div class="profile__header">
      <div class="profile__img"><img :src="`/images/user-icon/${user.icon}.png`"></div>
      <app-button
        v-if="$store.state.userId === parseInt($route.params.user_id, 10)"
      >プロフィールを編集</app-button>
      <app-button
        v-else
      >フォロー</app-button>
    </div>
    <div class="profile__name">{{ user.user_name }}</div>
    <div class="profile__id">@{{ user.userId }}</div>
    <div class="profile__description">{{ user.profile }}</div>
    <div class="profile__followContainer">
      <div class="profile__follow">
        <span class="profile__follow--number">{{ follows.length }}</span>フォロー中
      </div>
      <div class="profile__follow">
        <span class="profile__follow--number">{{ followers.length }}</span>フォロワー
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {},
    },
    follows: {
      type: Array,
      default: () => [],
    },
    followers: {
      type: Array,
      default: () => [],
    },
  }
}
</script>
<style lang='scss' scoped>
.profile {
  padding: 10px;

  &__header {
    position: relative;
    text-align: right;
  }

  &__img {
    position: absolute;
    top: -46px;
    left: 0;
    overflow: hidden;
    object-fit: cover;
    border: solid 3px $base_color;
    border-radius: 50%;
    width: 80px;
    height: 80px;

    img {
      width: 100%;
    }
  }

  &__button {
    padding: 3px 18px;
    color: #1ca1f2;
    background: rgba(0, 0, 0, 0);
    font-size: 16px;
    text-align: center;
    border: solid 1px #1ca1f2;
    border-radius: 52px;

    &:focus {
      outline: none;
    }

    &.is-active {
      color: #fff;
      background: #1ca1f2;
    }
  }

  &__name {
    margin-bottom: 2px;
    padding-top: 6px;
    font-weight: bold;
  }

  &__id {
    margin-bottom: 10px;
    font-size: 14px;
    color: $gray_color;
  }

  &__description {
    margin-bottom: 10px;
    font-size: 15px;
    line-height: 1.3;
  }

  &__followContainer {
    display: flex;
  }

  &__follow {
    font-size: 14px;
    color: $gray_color;

    &:not(:last-child) {
      margin-right: 10px;
    }

    &--number {
      margin-right: 6px;
      font-weight: bold;
      color: #fff;
    }
  }
}
</style>
