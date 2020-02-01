<template>
  <div class="userCard">
    <nuxt-link :to="{ name: id, params: { user_id: id }}">
    <app-user-icon :fileName="iconFileName" class="userCard__userIcon" />
    </nuxt-link>
    <div class="userCard__content">
      <div class="userCard__header">
        <slot name="header" />
      </div>
      <div class="userCard__body">
        <slot />
      </div>
      <div class="uerCard__footer">
          <slot name="footer" />
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
    id: {
      type: Number,
      default: 336301797,
    },
    iconFileName: {
      type: String,
      default: '',
    },
  }
};
</script>
<style lang="scss" scoped>
.userCard {
  font-size: 14px;
  color: #fff;
  display: flex;
  padding: 10px 18px 10px 12px;
  border-bottom: solid 1px $border_color;

  &:hover {
    background: rgba(#fff, .05);
  }

  &__userIcon {
    flex: 0 0 auto;
    margin-right: 16px;
    width: 40px;
    height: 40px;
  }

  &__content {
    width: calc( 100% - 53px );
    line-height: 1.2;
  }

  &__header {
    margin-bottom: 4px;
  }

  &__body {
    margin-bottom: 4px;

    p {
      white-space: pre-wrap;
    }
  }
}
</style>