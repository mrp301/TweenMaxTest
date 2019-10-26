<template>
  <div>
    <the-nav v-model="nav.index" />
    <main class="container"
      v-touch:swipe.left="() => swipe('left')"
      v-touch:swipe.right="() => swipe('right')"
    >
     <slot/>
    </main>
  </div>
</template>
<script>
import TheNav from '~/components/Molecules/TheNav';
export default {
  components: {
    TheNav,
  },
  data() {
    return {
      nav: {
        index: 0,
        position: ['tweet', 'reply', 'media', 'good'],
      }
    }
  },
  methods: {
    swipe(direction) {
      if (direction === 'left') {
        if (this.nav.index !== this.nav.position.length - 1 ) {
          this.nav.index ++;
        }
      } else {
        if (this.nav.index !== 0) {
          this.nav.index --;
        }
      }
    },
  },
}
</script>
