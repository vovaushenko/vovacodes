import { Story } from '@storybook/react';
import TodoWidget from './TodoWidget';

export default {
  title: 'Widgets/TodoWidget',
  component: TodoWidget,
};

const Template: Story = (args) => <TodoWidget {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
