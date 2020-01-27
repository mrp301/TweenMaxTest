export const state = () => ({
  userId: 0
});

export const mutations = {
  login(state, value) {
    state.userId = value;
  }
}
