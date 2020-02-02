import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import HeaderHome from '~/components/Organisms/layouts/HeaderHome.vue';

storiesOf('Organisms/HeaderHome', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { HeaderHome },
    template: `<header-home />`
  }))