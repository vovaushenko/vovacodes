import { Story } from '@storybook/react';
import React from 'react';
import Avatar, { Props } from './Avatar';

export default {
  title: 'UI/Avatar',
  component: Avatar,
};

const Template: Story<Props> = (args) => <Avatar {...args} />;

export const ImgAndNotActive = Template.bind({});
ImgAndNotActive.args = {
  hasBadge: false,
  isActive: false,
  src: '/assets/avatar.jpeg',
  firstName: 'John',
  lastName: 'Doe',
};
export const ImgAndActive = Template.bind({});
ImgAndActive.args = {
  hasBadge: false,
  isActive: true,
  src: '/images/avatar.png',
  firstName: 'John',
  lastName: 'Doe',
};
export const ImgAndActiveAndBadge = Template.bind({});
ImgAndActiveAndBadge.args = {
  hasBadge: true,
  isActive: true,
  src: '/images/avatar.png',
  firstName: 'John',
  lastName: 'Doe',
};
export const NoImg = Template.bind({});
NoImg.args = {
  hasBadge: true,
  isActive: true,
  src: '',
  firstName: 'John',
  lastName: 'Doe',
};
