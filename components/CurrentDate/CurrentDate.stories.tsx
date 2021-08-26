import { Story } from '@storybook/react';
import CurrentDate, { Props } from './CurrentDate';

export default {
  title: 'UI/Date',
  component: CurrentDate,
};

const Template: Story<Props> = (args) => <CurrentDate {...args} />;

export const SmallSize = Template.bind({});
SmallSize.args = { variant: 'smallFont' };

export const MiddleSize = Template.bind({});
MiddleSize.args = { variant: 'middleFont' };

export const LargeSize = Template.bind({});
LargeSize.args = { variant: 'largeFont' };
