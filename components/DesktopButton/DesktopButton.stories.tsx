import { Story } from '@storybook/react';
import DesktopButton, { Props } from './DesktopButton';

export default {
  title: 'Buttons/DesktopButton',
  component: DesktopButton,
};

const Template: Story<Props> = (args) => <DesktopButton {...args} />;

export const ThisPC = Template.bind({});
ThisPC.args = {
  text: 'This PC',
  iconSize: { width: 50, height: 50 },
  iconSrc: 'assets/icons/Desktop/this_pc.webp',
};
export const ControlPanel = Template.bind({});
ControlPanel.args = {
  text: 'Control Panel',
  iconSize: { width: 50, height: 50 },
  iconSrc: 'assets/icons/Desktop/control_panel.webp',
};
export const TrashBin = Template.bind({});
TrashBin.args = {
  text: 'Recycle Bin',
  iconSize: { width: 50, height: 50 },
  iconSrc: 'assets/icons/Desktop/recyclebin.webp',
};
