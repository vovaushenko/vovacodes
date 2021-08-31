import { Story } from '@storybook/react';
import SectionHeader, { Props } from './SectionHeader';

export default {
  title: 'Portfolio/Typography/Header',
  component: SectionHeader,
};

const Template: Story<Props> = (args) => (
  <SectionHeader {...args}>This is header</SectionHeader>
);

export const Thin = Template.bind({});
Thin.args = { margin: '0', headerText: 'Header' };
