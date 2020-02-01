<template>
  <div>
    <ul>
      <li v-for="tweet in tweets" :key="tweet.id">
        <app-tweet :tweet="tweet" />
      </li>
    </ul>
  </div>
</template>
<script>
import AppTweet from '~/components/Molecules/AppTweet.vue'
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
      default: () => [],
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
  transition: all .1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
