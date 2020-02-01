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
import AppTweet from '~/components/Molecules/AppTweet.vue';
export default {
  components: { AppTweet },
  async asyncData({ store, app }) {
    const userId = store.state.userId;
    const tweets = await app.$axios.$get(`/api/users/${userId}/timeline`);
    return { tweets };
  },
  head() {
    return {
      title: 'ホーム',
    };
  },
}
</script>