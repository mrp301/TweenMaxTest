import { configure, addDecorator, addParameters } from '@storybook/vue';
 
addParameters({
  backgrounds: [
    { name: 'Girls', value: '#f3bccd', default: true },
    { name: 'Night', value: '#15222b' }
  ],
});