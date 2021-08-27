import { Story } from '@storybook/react';
import React from 'react';
import SearchBar, { Props } from './SearchBar';

export default {
  title: 'Forms/SearchBarInput',
  component: SearchBar,
};

const Template: Story<Props> = (args) => <SearchBar {...args} />;
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
