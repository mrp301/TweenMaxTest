import Vue from 'vue'

Vue.mixin({
  data() {
    return  {
      scrollY: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    $delay (ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    handleScroll() {
      this.scrollY = window.scrollY;
    }
  }
})
