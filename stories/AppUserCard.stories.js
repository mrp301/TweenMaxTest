import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import AppUserCard from '~/components/Molecules/AppUserCard.vue';

storiesOf('Molecules/AppUserCard', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { AppUserCard },
    props: {
      id: text('id', '336301797'),
      iconFileName: text('iconfileName', 'default'),
    },
    template: `
      <app-user-card :id="id" iconFileName="default">
        <template v-slot:header>ヘッダー</template>
        <p>コンテンツ</p>
        <template v-slot:footer>フッター</template>
      </app-user-card>
    `
  }))