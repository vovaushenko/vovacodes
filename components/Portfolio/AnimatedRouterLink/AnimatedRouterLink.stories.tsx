import { Story } from '@storybook/react';
import AnimatedRouterLink, { Props } from './AnimatedRouterLink';

export default {
  title: 'UI/AnimatedRouterLink',
  component: AnimatedRouterLink,
};

const Template: Story<Props> = (args) => <AnimatedRouterLink {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
  href: '/hey',
  hoverText: 'Hover Text',
  text: 'Hover over me',
  animationTimeout: 100,
};
export const Highlight = Template.bind({});
Highlight.args = {
  variant: 'highlight',
  href: '/hey',
  hoverText: 'Hover Text',
  text: 'Hover over me',
  animationTimeout: 200,
};
