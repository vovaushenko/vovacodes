import { Story } from '@storybook/react';
import Button, { Props } from './Button';

export default {
  title: 'Buttons/GenericButton',
  component: Button,
};

const Template: Story<Props> = (args) => <Button {...args}>All Apps</Button>;

export const NoChevron = Template.bind({});
NoChevron.args = { variant: 'standardBtn', withChevron: false };

export const WithChevron = Template.bind({});
WithChevron.args = { variant: 'standardBtn', withChevron: true };

export const LikeBtn = Template.bind({});
LikeBtn.args = { variant: 'likeBtn', withChevron: false };
