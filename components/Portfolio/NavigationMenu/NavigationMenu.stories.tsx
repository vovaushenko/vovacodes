import { Story } from '@storybook/react';
import NavigationMenu from './NavigationMenu';

export default {
  title: 'Portfolio/NavigationMenu',
  component: NavigationMenu,
};

const Template: Story = (args) => <NavigationMenu {...args} />;

export const NavMenu = Template.bind({});
NavMenu.args = {};
