<template>
  <div>
    <the-header userName="mrble" />
    <the-cover fileName="cover" />
    <the-profile
      img="momoyama"
      name="桃山みらい"
      id="@momoyama_mirai710"
      description="キラッとやってみた！キラッとやってみた！キラッとやってみた！キラッとやってみた！キラッとやってみた！"
      follows="100"
      followers="1,000"
    />
    <nuxt />
  </div>
</template>
<script>
import TheHeader from '~/components/Organisms/layouts/TheHeader';
import TheCover from '~/components/Organisms/layouts/TheCover';
import TheProfile from '~/components/Organisms/TheProfile';
export default {
  components: {
    TheHeader,
    TheCover,
    TheProfile,
  },
}
</script>
<style lang='scss'>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
  background: #969696;
}

body {
  color: #fff;
  max-width: 600px;
  margin: 0 auto;
  background: $base_color;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
