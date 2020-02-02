import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import AppUserIcon from '~/components/atoms/AppUserIcon.vue';

storiesOf('atoms/AppUserIcon', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { AppUserIcon },
    props: {
      fileName: text('fileName', 'default'),
    },
    template: `<app-user-icon style="width: 30px; height: 30px;" :fileName="fileName" />`
  }))