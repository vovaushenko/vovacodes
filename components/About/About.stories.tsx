import { Story } from '@storybook/react';
import About from './About';

export default {
  title: 'Windows/About',
  component: About,
};

const Template: Story = (args) => <About {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
