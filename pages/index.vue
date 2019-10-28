<template>
  <div>
    <the-main-area :nav="nav">
      <nuxt-child keep-alive :tweets="tweets" />
    </the-main-area>
    <button @click="PostTweet = true" class="postbutton">＋</button>
    <post-tweet :isActive="PostTweet" @postclose="postclose" @addTweet="addTweet" />
  </div>
</template>
<script>
import AppModalBottom from '~/components/Molecules/AppModalBottom.vue';
import TheMainArea from '~/components/Organisms/layouts/TheMainArea.vue';
import PostTweet from '~/components/Organisms/PostTweet.vue';
import tweets from '~/static/tweet/tweets.js';
export default {
  components: {
    AppModalBottom,
    TheMainArea,
    PostTweet,
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
  data() {
    return {
      tweets: tweets,
      PostTweet: false,
    }
  },
  methods: {
    animation() {
      TweenMax.to('#obj', 0.5, { scale: 10, repeat: 3 });
    },
    addTweet(text) {
      const tweet = {
        id: this.creatRandomId(),
        userid: '@momoyama_mirai710',
        name: '桃山みらい',
        icon: 'momoyama',
        tweet: text,
      }
      tweets.unshift(tweet);
    },
    postclose() {
      this.PostTweet = false;
    },
    creatRandomId() {
      return Math.random().toString(32).substring(2);
    }
  },
}
</script>

<style lang='scss'>
li {
  text-align: left;
  padding-left: 5px;
}

.container {
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

.postbutton {
  position: fixed;
  z-index: 2000;
  right: 20px;
  bottom: 20px;
  border: 0;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  text-align: center;
  font-size: 30px;
  color: #fff;
  background: #1ca1f2;
  box-shadow: rgba(136, 153, 166, 0.2) 0px 0px 10px, rgba(136, 153, 166, 0.25) 0px 1px 3px 1px;

  &:focus {
    outline: none;
  }
}
</style>
