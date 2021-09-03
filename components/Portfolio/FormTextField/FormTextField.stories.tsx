import { Story } from '@storybook/react';
import React from 'react';
import FormTextField, { Props } from './FormTextField';

export default {
  title: 'Form/TextField',
  component: FormTextField,
};

const Template: Story<Props> = (args) => <FormTextField {...args} />;
export const TextControl = Template.bind({});
TextControl.args = {
  name: 'name',
  type: 'text',
  placeholder: 'Your Name',
};
export const EmailControl = Template.bind({});
EmailControl.args = {
  name: 'email',
  type: 'email',
  placeholder: 'Your Email',
};
