import { Story } from '@storybook/react';
import React from 'react';
import WaveDivider, { Props } from './WaveDivider';

export default {
  title: 'Portfolio/Wave Dividers',
  component: WaveDivider,
};

const Template: Story<Props> = (args) => <WaveDivider {...args} />;

export const WhatsHotDivider = Template.bind({});
WhatsHotDivider.args = {
  waveImg: '/images/blobs/4.svg',
  dividerHeight: '150px',
};
