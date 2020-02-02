<template>
  <div class="profile">
    <div class="profile__header">
      <app-user-icon
        class="profile__userIcon"
        :file-name="user.icon"
      />
      <app-button
        v-if="$store.state.userId === parseInt($route.params.user_id, 10)"
      >プロフィールを編集</app-button>
      <app-button
        v-else
      >フォロー</app-button>
    </div>
    <div class="profile__name">{{ user.user_name }}</div>
    <div class="profile__id">@{{ user.id }}</div>
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
import AppUserIcon from '~/components/atoms/AppUserIcon.vue';
export default {
  components: {
    AppUserIcon,
  },
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
  background: $base_color;

  &__header {
    position: relative;
    text-align: right;
  }

  &__userIcon {
    position: absolute;
    top: -46px;
    left: 0;
    width: 80px;
    height: 80px;
    border: solid 2px $base_color;
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
      color: $text-color;
    }
  }
}
</style>
