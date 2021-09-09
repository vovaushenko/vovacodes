import { Story } from '@storybook/react';
import Desktop from './Desktop';

export default {
  title: 'Desktop/Desktop',
  component: Desktop,
};

const Template: Story = (args) => <Desktop {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
