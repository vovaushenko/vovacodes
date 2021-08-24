import { Story } from '@storybook/react';
import Hero from './Hero';

export default {
  title: 'Hero',
  component: Hero,
};

const Template: Story = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
