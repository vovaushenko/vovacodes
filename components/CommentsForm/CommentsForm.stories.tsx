import { Story } from '@storybook/react';
import CommentsForm from './CommentsForm';

export default {
  title: 'Forms/CommentsForm',
  component: CommentsForm,
};

const Template: Story = (args) => <CommentsForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
