import { Story } from '@storybook/react';
import SocialMediaContact, { Props } from './SocialMediaContact';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import React from 'react';

export default {
  title: 'Portfolio/SocialMediaContact',
  component: SocialMediaContact,
};

const Template: Story<Props> = (args) => <SocialMediaContact {...args} />;

export const GitHub = Template.bind({});
GitHub.args = {
  icon: <FiGithub className={'contact-icon'} />,
  href: 'google.com',
};
export const Twitter = Template.bind({});
Twitter.args = {
  icon: <FiTwitter className={'contact-icon'} />,
  href: 'google.com',
};
