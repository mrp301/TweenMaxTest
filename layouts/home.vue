<template>
  <div>
    <header-home />
    <nuxt />
  </div>
</template>
<script>
import HeaderHome from '~/components/Organisms/layouts/HeaderHome.vue';
import AppUserIcon from '~/components/atoms/AppUserIcon.vue';
export default {
  components: {
    HeaderHome,
    AppUserIcon,
  },
}
</script>
<style lang="scss">
html {
  font-family: Arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
  background: #000;
}

body {
  color: $text_color;
  font-weight: $text_wight;
  margin: 0 auto;
  max-width: 375px;
  background: $base_color;
  background: url('~assets/images/girls_tile.png');
  background-size: 120px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

ul,
li {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}
</style>