import { Story } from '@storybook/react';
import Clock, { Props } from './Clock';

export default {
  title: 'UI/Clock',
  component: Clock,
};

const Template: Story<Props> = (args) => <Clock {...args} />;

export const SmallSize = Template.bind({});
SmallSize.args = { variant: 'smallFont' };

export const MiddleSize = Template.bind({});
MiddleSize.args = { variant: 'middleFont' };

export const LargeSize = Template.bind({});
LargeSize.args = { variant: 'largeFont' };
