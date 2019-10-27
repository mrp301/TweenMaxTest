export const state = () => ({
  isFixed: false,
});

export const mutations = {
  setFixed(state) {
    state.isFixed = true;
  },
  setStatic(state) {
    state.isFixed = false;
  },
}
