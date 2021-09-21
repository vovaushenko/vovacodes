import { Story } from '@storybook/react';
import Calendar from './Calendar';

export default {
  title: 'Ui/Calendar',
  component: Calendar,
};

const Template: Story = (args) => <Calendar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
