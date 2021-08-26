import { Story } from '@storybook/react';
import SystemTray from './SystemTray';

export default {
  title: 'SystemTray',
  component: SystemTray,
};

const Template: Story = (args) => <SystemTray {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
