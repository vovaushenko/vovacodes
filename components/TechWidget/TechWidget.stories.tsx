import { Story } from '@storybook/react';
import TechWidget from './TechWidget';

export default {
  title: 'Widgets/TechWidget',
  component: TechWidget,
};

const Template: Story = (args) => <TechWidget {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
