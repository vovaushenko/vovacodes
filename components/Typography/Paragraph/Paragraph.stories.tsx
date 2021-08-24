import { Story } from '@storybook/react';
import Paragraph, { Props } from './Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
};

const Template: Story<Props> = (args) => (
  <Paragraph {...args}>This is paragraph</Paragraph>
);

export const Primary = Template.bind({});
Primary.args = { margin: '0' };
