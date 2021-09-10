import { Story } from '@storybook/react';
import ActionButton, { Props } from './ActionButton';

export default {
  title: 'Portfolio/ActionButton',
  component: ActionButton,
};

const Template: Story<Props> = (args) => <ActionButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonText: 'Click Me',
};
export const Loading = Template.bind({});
Loading.args = {
  buttonText: 'Click Me',
  isLoading: true,
};
