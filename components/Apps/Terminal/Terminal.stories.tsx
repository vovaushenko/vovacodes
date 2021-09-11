import { Story } from '@storybook/react';
import Terminal from './Terminal';

export default {
  title: 'Portfolio/Terminal',
  component: Terminal,
};

const Template: Story = (args) => <Terminal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
