import { Story } from '@storybook/react';
import Button, { Props } from './Button';

export default {
  title: 'Buttons/GenericButton',
  component: Button,
};

const Template: Story<Props> = (args) => <Button {...args}>All Apps</Button>;

export const NoChevron = Template.bind({});
NoChevron.args = { withChevron: false };

export const WithChevron = Template.bind({});
WithChevron.args = { withChevron: true };
