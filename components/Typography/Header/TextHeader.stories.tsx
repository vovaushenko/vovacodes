import { Story } from '@storybook/react';
import Header, { Props } from './TextHeader';

export default {
  title: 'Typography/Header',
  component: Header,
};

const Template: Story<Props> = (args) => (
  <Header {...args}>This is header</Header>
);

export const Thin = Template.bind({});
Thin.args = { margin: '0', isBold: false };

export const Bold = Template.bind({});
Bold.args = { margin: '0', isBold: true };
