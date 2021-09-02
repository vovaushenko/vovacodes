import { Story } from '@storybook/react';
import ScrollHint from './ScrollHint';

export default {
  title: 'Portfolio/ScrollHint',
  component: ScrollHint,
};

const Template: Story = (args) => <ScrollHint {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
