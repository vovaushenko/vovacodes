import { Story } from '@storybook/react';
import DesktopApps from './DesktopApps';

export default {
  title: 'Desktop/DesktopApps',
  component: DesktopApps,
};

const Template: Story = (args) => <DesktopApps {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
