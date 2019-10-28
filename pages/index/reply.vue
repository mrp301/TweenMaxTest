<template>
  <div>
    <ul>
      <li v-for="tweet in tweets" :key="tweet.id">
        <app-tweet :data="tweet" />
      </li>
    </ul>
  </div>
</template>
<script>
import AppTweet from '~/components/atoms/AppTweet.vue';
export default {
  components: {
    AppTweet,
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
  props: {
    tweets: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>

<style lang='scss' scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    margin: 0;
    padding: 0;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
