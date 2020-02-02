import { storiesOf } from '@storybook/vue';
import { withKnobs, object } from '@storybook/addon-knobs';
import AppTweet from '~/components/Molecules/AppTweet.vue';

storiesOf('Molecules/AppTweet', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const tweet = {
      id: 980190981,
      user_id: 298486374,
      content: "ツイート",
      created_at: "2020-02-01T12:25:47.604Z",
      updated_at: "2020-02-01T12:25:47.604Z",
      user: {
        id: 298486374,
        userId: "aoba",
        user_name: "青葉りんか",
        profile: "メガネ",
        icon: "aobaIcon",
        header: "aobaHeader",
        created_at: "2020-01-26T04:51:54.012Z",
        updated_at: "2020-01-26T04:51:54.012Z",
      },
    }
    return {
      components: { AppTweet },
      data: () => ({ tweet }),
      template: `<app-tweet :tweet='tweet'></app-tweet>`
    }
  })