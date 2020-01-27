<template>
  <div>
    <ul>
      <li v-for="follow in follows" :key="follow.id">
        <user-profile :user="follow" />
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
    follows: {
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
