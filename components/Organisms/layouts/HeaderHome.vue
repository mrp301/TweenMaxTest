<template>
  <div>
    <app-header>
      <div class="header__user">
        <app-user-icon fileName="aobaIcon" class="header__userIcon" />
        <nuxt-link class="header__name" :to="{ name: 'home'}">ホーム</nuxt-link>
      </div>
    </app-header>
    <nuxt />
  </div>
</template>
<script>
import AppHeader from '~/components/atoms/layouts/AppHeader';
import AppUserIcon from '~/components/atoms/AppUserIcon.vue';
export default {
  components: {
    AppHeader,
    AppUserIcon,
  },
}
</script>
<style lang="scss" scoped>
.header {
  &__user {
    display: flex;
    align-items: center;
  }

  &__userIcon {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
}
</style>