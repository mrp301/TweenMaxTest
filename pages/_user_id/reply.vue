<template>
  <div>
    <ul>
      <li v-for="follower in followers" :key="follower.id">
        <user-profile :user="follower" />
      </li>
    </ul>
  </div>
</template>
<script>
import UserProfile from '~/components/Molecules/UserProfile.vue'
export default {
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
  components: {
    UserProfile,
  },
  props: {
    followers: {
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
}

li {
  list-style: none;
}
</style>
