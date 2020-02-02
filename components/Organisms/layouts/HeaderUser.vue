<template>
  <div>
    <app-header>
      <div class="header__contents">
        <div class="header__prevIcon">
          <nuxt-link class="header__name" :to="{ name: 'home'}">←</nuxt-link>
        </div>
        <div>
          <p class="header__userName">{{ name }}</p>
          <p class="header__tweetCount">{{ tweetCount }}件のツイート</p>
        </div>
      </div>
    </app-header>
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
  props: {
    name: {
      type: String,
      default: '',
    },
    tweetCount: {
      type: Number,
      default: 0,
    },
  },
}
</script>
<style lang="scss" scoped>
.header {
  &__contents {
    display: flex;
    align-items: center;
    color: #fff;
  }

  &__prevIcon {
    margin-right: 15px;
  }

  &__userName {
    font-weight: bold;
    line-height: 1;
    margin-bottom: 4px;
  }

  &__tweetCount {
    line-height: 1;
    font-size: 13px;
  }
}
</style>