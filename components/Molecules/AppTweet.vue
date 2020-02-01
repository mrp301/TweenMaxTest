<template>
  <app-user-card :id="tweet.user.id" :icon-file-name="tweet.user.icon" class="userProfile">
    <template v-slot:header>
      <nuxt-link class="tweet__name" :to="{ name: 'user_id', params: { user_id: tweet.user.id }}">
        {{ tweet.user.user_name }}
      </nuxt-link>
      <span class="tweet__id">@{{ tweet.user.id }}</span>
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
    color: #fff;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  &__id {
    color: #8899a6;
  }
}
</style>
