import { Story } from '@storybook/react';
import Acknowledgments from './Acknowledgments';

export default {
  title: 'Portfolio/Acknowledgments',
  component: Acknowledgments,
};

const Template: Story = (args) => <Acknowledgments {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
