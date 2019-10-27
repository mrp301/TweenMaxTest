<template>
  <the-main-area :nav="nav">
    <nuxt-child/>
  </the-main-area>
</template>
<script>
import AppModalBottom from '~/components/Molecules/AppModalBottom.vue';
import TheMainArea from '~/components/Organisms/layouts/TheMainArea.vue';
export default {
  components: {
    AppModalBottom,
    TheMainArea,
  },
  asyncData({ route }) {
    const currentPath = route.path.replace('/', '');
    let index = 0;
    switch (currentPath) {
      case 'tweet':
        break;
      case 'reply':
        index = 1;
        break;
      case 'media':
        index = 2;
        break;
      case 'good':
        index = 3;
        break;
      default:
        break;
    }
    return {
      nav: {
        index: index,
        position: ['tweet', 'reply', 'media', 'good'],
      }
    };
  },
  methods: {
    animation() {
      TweenMax.to('#obj', 0.5, { scale: 10, repeat: 3 });
    },
  },
}
</script>

<style lang='scss'>
li {
  text-align: left;
  padding-left: 5px;
}

.container {
  padding: 10px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;

  &.isHeaderFixed {
    padding-top: 51px;
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
