import { Story } from '@storybook/react';
import TimePanel from './TimePanel';

export default {
  title: 'UI/TimePanel',
  component: TimePanel,
};

const Template: Story = (args) => <TimePanel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
