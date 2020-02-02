import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import AppHeader from '~/components/atoms/layouts/AppHeader.vue';

storiesOf('atoms/AppHeader', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { AppHeader },
    props: {
      text: {
        default: text('text', '文字が入ります'),
      },
    },
    template: `<app-header>{{ text }}</app-header>`
  }))