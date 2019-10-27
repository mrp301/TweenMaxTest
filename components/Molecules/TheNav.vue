<template>
  <nav class="nav-container" :class="{ 'is-fixed': isFixed }">
    <ul class="nav">
      <the-nav-item @fetchIndex="fetchIndex" v-model="width[0]" text="ツイート" :current="value" :index="0" id="tweet" />
      <the-nav-item @fetchIndex="fetchIndex" v-model="width[1]" text="ツイートと返信" :current="value" :index="1" id="reply" />
      <the-nav-item @fetchIndex="fetchIndex" v-model="width[2]" text="メディア" :current="value" :index="2" id="media" />
      <the-nav-item @fetchIndex="fetchIndex" v-model="width[3]" text="いいね" :current="value" :index="3" id="good" />
    </ul>
    <div
      class="nav-bar"
      :style="{
        'width': `${width[value]}px`,
        'left': `${left}px`
      }"
    ></div>
  </nav>
</template>
<script>
import TheNavItem from '~/components/atoms/TheNavItem.vue'
export default {
  components: {
    TheNavItem,
  },
  props: {
    value: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      width: [0, 0, 0, 0],
    }
  },
  computed: {
    isFixed() {
      if (this.scrollY > 436) {
        this.$store.commit('headerNav/setFixed');
        return true;
      } else {
        this.$store.commit('headerNav/setStatic');
        return false;
      }
    },
    left() {
      switch (this.value) {
        case 0:
          return 0;
          break;
        case 1:
          return this.width[0];
          break;
        case 2:
          return this.width[0] + this.width[1];
          break;
        case 3:
          return this.width[0] + this.width[1] + this.width[2];
          break;
        default:
      }
    },
  },
  methods: {
    fetchIndex(index) {
      this.$emit('input', index);
    }
  },
}
</script>
<style lang='scss' scoped>
.nav-container {
  position: relative;
  border-bottom: solid 1px $border_color;
  width: 100%;
  background: $base_color;
}

.nav-bar {
  position: absolute;
  bottom: 0;
  height: 2px;
  background: #1ca1f2;
  transition: all 0.2s ease-in;
}

.nav {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    overflow: hidden;
    position: relative;
    display: block;
    flex-grow: 1;
    text-align: center;
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    color: $gray_color;

    &.is-active {
      color: #1ca1f2;
    }
  }
}

.is-fixed {
  position: fixed;
  max-width: 600px;
  top: 0;
}
</style>
