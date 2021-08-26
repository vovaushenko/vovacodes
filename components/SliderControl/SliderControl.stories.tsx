import { Story } from '@storybook/react';
import SliderControl, { Props } from './SliderControl';

export default {
  title: 'UI/SliderControl',
  component: SliderControl,
};

const Template: Story<Props> = (args) => <SliderControl {...args} />;

export const VoiceControl = Template.bind({});
VoiceControl.args = { variant: 'voiceControl', withChevron: true };
export const BrightnessControl = Template.bind({});
BrightnessControl.args = { variant: 'brightnessControl', withChevron: false };
