import { Story } from '@storybook/react';
import SettingsModalContent from './SettingsModalContent';

export default {
  title: 'Modals/SettingsModalContent',
  component: SettingsModalContent,
};

const Template: Story = (args) => <SettingsModalContent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
