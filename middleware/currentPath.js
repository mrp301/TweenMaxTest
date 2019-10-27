export default function({ store, route }) {
  const currentPath = route.path.replace('/', '');
  store.commit('currentPath/setData', currentPath);
}
