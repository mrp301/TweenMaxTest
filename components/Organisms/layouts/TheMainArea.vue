<template>
  <div>
    <the-nav v-model="nav.index" />
    <main class="container" :class="{ 'isHeaderFixed': isHeaderFixed }"
      v-touch:swipe.left="() => swipe('left')"
      v-touch:swipe.right="() => swipe('right')"
    >
    <div class="slotContainer">
      <slot />
    </div>
    </main>
  </div>
</template>
<script>
import TheNav from '~/components/Molecules/TheNav';
export default {
  components: {
    TheNav,
  },
  props: {
    nav: {
      type: Object,
      default: {},
    },
  },
  watch: {
    'nav.index': function(index) {
      this.pageChange(this.nav.position[index]);
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
    pageChange(slug) {
      if (slug === 'tweet') {
        this.$router.push({ name: `index` });
      } else {
        this.$router.push({ name: `index-${slug}` });
      }
    }
  },
  computed: {
    isHeaderFixed() {
      return this.$store.state.headerNav.isFixed;
    }
  }
}
</script>
<style lang='scss'>
.slotContainer {
  position: relative;
   width: 100%;
}

@keyframes scaleout {
  0% {
    opacity: 1;
    transform: scale(0.0);
  } 100% {
    transform: scale(1.0);
    opacity: 0;
  }
}
</style>
