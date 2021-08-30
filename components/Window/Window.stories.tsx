import { Story } from '@storybook/react';
import Window, { Props } from './Window';

export default {
  title: 'Windows/Window',
  component: Window,
};

const Template: Story<Props> = (args) => <Window {...args} />;

export const OpenWindow = Template.bind({});
OpenWindow.args = {
  isOpen: true,
  closeWindow: () => console.log('closed'),
  windowName: 'This PC',
  size: { height: 250, width: 250 },
  windowIcon: '/assets/icons/Desktop/this_pc.webp',
};
