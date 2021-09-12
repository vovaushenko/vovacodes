import { Story } from '@storybook/react';
import SearchModalContent from './SearchModalContent';

export default {
  title: 'Modals/SearchModal',
  component: SearchModalContent,
};

const Template: Story = (args) => <SearchModalContent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
