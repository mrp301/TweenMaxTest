<template>
  <div>
    <header-user name="青葉りんか" :tweetCount="1999" />
    <nuxt />
  </div>
</template>
<script>
import HeaderUser from '~/components/Organisms/layouts/HeaderUser.vue';
export default {
  components: {
    HeaderUser,
  },
}
</script>