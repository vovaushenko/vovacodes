import { Story } from '@storybook/react';
import DummyComponent, { DummyProps } from './DummyComponent';

export default {
  title: 'DummyComponent',
  component: DummyComponent,
};

const Template: Story<DummyProps> = (args) => <DummyComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = { dummyText: 'DELETE THIS COMPONENT THIS IS A TEST 😃' };
