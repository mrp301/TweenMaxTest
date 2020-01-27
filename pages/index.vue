<template>
  <div>
    ログイン
    <input type="text" v-model="value">
    <button @click="login">ログイン</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
    }
  },
  methods: {
    async login() {
      this.$store.commit('login', this.value);
      this.$router.push({ name: 'user_id', params: { user_id: this.$store.state.userId }});
    }
  }
}
</script>