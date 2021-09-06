import { Story } from '@storybook/react';
import Navbar, { Props } from './Navbar';

export default {
  title: 'Portfolio/Navbar',
  component: Navbar,
};

const Template: Story<Props> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = { isLogoExpanded: true };
