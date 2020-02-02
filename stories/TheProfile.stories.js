import { storiesOf } from '@storybook/vue';
import { withKnobs, object } from '@storybook/addon-knobs';
import TheProfile from '~/components/Organisms/TheProfile.vue';

storiesOf('Organisms/TheProfile', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const user = {
      id: 298486374,
      userId: "aoba",
      user_name: "青葉りんか",
      profile: "メガネ",
      icon: "aobaIcon",
      header: "aobaHeader",
      created_at: "2020-01-26T04:51:54.012Z",
      updated_at: "2020-01-26T04:51:54.012Z",
    }
    const follows = Array(389);
    const followers = Array(2403);
    return {
      components: { TheProfile },
      data: () => ({ user, follows, followers }),
      template: `<the-profile :user='user' :follows="follows" :followers="followers">`
    }
  })