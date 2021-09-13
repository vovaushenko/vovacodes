import { Story } from '@storybook/react';
import SettingsButton, { Props } from './SettingsButton';

export default {
  title: 'buttons/SettingsButton',
  component: SettingsButton,
};

const Template: Story<Props> = (args) => (
  <SettingsButton {...args}>Button</SettingsButton>
);

export const TurnedOFF = Template.bind({});
TurnedOFF.args = {
  isTurnedOn: false,
  variant: 'icon',
  text: 'text',
  btnAction: null,
};
export const TurnedON = Template.bind({});
TurnedON.args = {
  isTurnedOn: false,
  variant: 'icon',
  text: 'text',
  btnAction: null,
};
