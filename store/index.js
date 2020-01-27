export const state = () => ({
  userId: '298486374'
});

export const mutations = {
  login(state, value) {
    state.userId = value;
  }
}
