<template>
  <div>
    <the-main-area>
      <div>
        <h1>ひたすらUIコンポーネント作るお</h1>
        <ol>
          <li>tweenmax入れる：Done</li>
          <li>とりあえず適当に触ってみる：Done</li>
          <li>スワイプ実装完了</li>
          <li>1つコンポーネント作る</li>
          <li>一旦振り返って方向性を確認する</li>
        </ol>
        <p id="obj">あああ</p>
        <app-button text="ボタン" />
        <!-- <app-modal-bottom /> -->
      </div>
    </the-main-area>
  </div>
</template>
<script>
import AppModalBottom from '~/components/Molecules/AppModalBottom.vue';
import TheMainArea from '~/components/Organisms/layouts/TheMainArea.vue';
export default {
  components: {
    AppModalBottom,
    TheMainArea,
  },
  methods: {
    animation() {
      TweenMax.to('#obj', 0.5, { scale: 10, repeat: 3 });
    },
  }
}
</script>

<style>
li {
  text-align: left;
  padding-left: 5px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
