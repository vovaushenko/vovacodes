import { Story } from '@storybook/react';
import Button, { DummyProps } from './DummyComponent';

export default {
	title: 'Button',
	component: Button,
};

const Template: Story<DummyProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { dummyText: 'DELETE THIS COMPONENT THIS IS A TEST 😃' };
