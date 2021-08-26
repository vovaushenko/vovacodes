import { Story } from '@storybook/react';
import SettingsPanel from './SettingsPanel';

export default {
  title: 'UI/SettingsPanel',
  component: SettingsPanel,
};

const Template: Story = (args) => <SettingsPanel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
