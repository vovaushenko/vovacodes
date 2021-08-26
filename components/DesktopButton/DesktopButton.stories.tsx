import { Story } from '@storybook/react';
import DesktopButton, { Props } from './DesktopButton';

export default {
  title: 'Buttons/DesktopButton',
  component: DesktopButton,
};

const Template: Story<Props> = (args) => <DesktopButton {...args} />;

export const ThisPC = Template.bind({});
ThisPC.args = {
  text: 'This PC Desktop',
  iconSize: { width: 50, height: 50 },
  iconSrc: 'assets/icons/Desktop/this_pc.webp',
  variant: 'desktop',
};
export const ControlPanel = Template.bind({});
ControlPanel.args = {
  text: 'Control Panel Desktop',
  iconSize: { width: 50, height: 50 },
  iconSrc: 'assets/icons/Desktop/control_panel.webp',
  variant: 'desktop',
};
export const TrashBin = Template.bind({});
TrashBin.args = {
  text: 'Recycle Bin Desktop',
  iconSize: { width: 50, height: 50 },
  iconSrc: 'assets/icons/Desktop/recyclebin.webp',
  variant: 'desktop',
};

export const ThisPCTray = Template.bind({});
ThisPCTray.args = {
  text: 'This PC Desktop',
  iconSize: { width: 50, height: 50 },
  iconSrc: 'assets/icons/Desktop/this_pc.webp',
  variant: 'systemTray',
};
export const ControlPanelTray = Template.bind({});
ControlPanelTray.args = {
  text: 'Control Panel Desktop',
  iconSize: { width: 50, height: 50 },
  iconSrc: 'assets/icons/Desktop/control_panel.webp',
  variant: 'systemTray',
};
export const TrashBinTray = Template.bind({});
TrashBinTray.args = {
  text: 'Recycle Bin Desktop',
  iconSize: { width: 50, height: 50 },
  iconSrc: 'assets/icons/Desktop/recyclebin.webp',
  variant: 'systemTray',
};
