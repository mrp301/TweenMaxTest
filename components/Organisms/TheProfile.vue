<template>
  <div class="profile">
    <div class="profile__header">
      <div class="profile__img"><img :src="`/cover/${img}.jpg`"></div>
      <button class="profile__button">フォローする</button>
    </div>
    <div class="profile__name">{{ name }}</div>
    <div class="profile__id">{{ id }}</div>
    <div class="profile__description">{{ description }}</div>
    <div class="profile__followContainer">
      <div class="profile__follow"><span class="profile__follow--number">{{ follows }}</span>フォロー</div>
      <div class="profile__follow"><span class="profile__follow--number">{{ followers }}</span>フォロワー</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: ''
    },
    follows: {
      type: String,
      default: 0,
    },
    followers: {
      type: String,
      default: 0
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
      margin-right: 2px;
      font-weight: bold;
      color: #fff;
    }
  }
}
</style>
