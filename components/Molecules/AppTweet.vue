<template>
  <app-user-card :id="tweet.user.id" :icon-file-name="tweet.user.icon" class="userProfile">
    <template v-slot:header>
      <nuxt-link class="tweet__name" :to="{ name: 'user_id', params: { user_id: tweet.user.id }}">
        {{ tweet.user.user_name }}
      </nuxt-link>
      <span class="tweet__id">@{{ tweet.user.id }}</span>
      <!-- <span class="tweet__date">{{ $dayjs(tweet.created_at).format('YYYY年MM月DD日') }}</span> -->
    </template>
    <p>{{ tweet.content }}</p>
  </app-user-card>
</template>
<script>
import AppUserCard from '~/components/Molecules/AppUserCard.vue';
export default {
  components: {
    AppUserCard,
  },
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
  &__name {
    color: $text_color;
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  &__id,
  &__date {
    color: $gray_color;
  }
}
</style>
