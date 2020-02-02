import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from 'storybook-addon-vue-info';
import { withNotes } from '@storybook/addon-notes';
import AppButton from '~/components/atoms/AppButton.vue';
import { withBackgrounds } from '@storybook/addon-backgrounds';

storiesOf('atoms/AppButton', module)
  .addDecorator( 
    withBackgrounds([ 
      { name: 'default', value: '#f3bccd', default: true }, 
      { name: 'white', value: '#3bccd' }, 
    ]) 
  )
  .addDecorator(withKnobs)
  .add('default', withNotes(
    `ああああ`
  )(() => {
    return {
      components: { AppButton },
      props: {
        text: {
          default: text('text', 'Button'),
        },
        type: {
          default: select('type', { default: 'circle' }),
        },
        state: {
          default: select('state', { default: '', active: 'active', danger: 'danger', disabled: 'disabled'  }),
        },
        disabled: {
          default: boolean('disabled', false),
        },
      },
      methods: {
        click() {
          console.log('ボタンクリック');
        },
      },
      template: `<app-button :type="type" :state="state" :disabled="disabled">{{ text }}</app-button>`,
    }
  }))
  .add('type', () => ({
    components: { AppButton },
     template: `
       <div>
        <app-button @click.prevent="click()">通常ボタン</app-button>
        <app-button state="active">アクティブボタン</app-button>
        <app-button state="danger">危険ボタン</app-button>
        <app-button state="disabled">無効ボタン</app-button>
      </div>
     `
  }))