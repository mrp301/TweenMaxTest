<template>
  <app-user-card :id="user.id" :icon-file-name="user.icon" class="userProfile">
    <template v-slot:header>
      <nuxt-link class="userProfile__name" :to="{ name: 'user_id', params: { user_id: user.id }}">
        {{ user.user_name }}
      </nuxt-link>
      <span class="userProfile__id">@{{ user.id }}</span>
    </template>
    <div class="tweet__text">{{ user.profile }}</div>
  </app-user-card>
</template>
<script>
import AppUserCard from '~/components/Molecules/AppUserCard.vue';
export default {
  components: {
    AppUserCard,
  },
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style lang="scss" scoped>
.userProfile {
  &__name {
    color: $text_color;
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
  }

  &__id {
    color: #8899a6;
  }
}
</style>