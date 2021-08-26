import { Story } from '@storybook/react';
import Taskbar from './Taskbar';

export default {
  title: 'UI/Taskbar',
  component: Taskbar,
};

const Template: Story = (args) => <Taskbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
