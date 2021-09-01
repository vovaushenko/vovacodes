import { Story } from '@storybook/react';
import PortfolioParagraph, { Props } from './PortfolioParagraph';

export default {
  title: 'Portfolio/Typography/Paragraph',
  component: PortfolioParagraph,
};

const Template: Story<Props> = (args) => (
  <PortfolioParagraph {...args}>This is header</PortfolioParagraph>
);

export const Small = Template.bind({});
Small.args = {
  margin: '0',
  variant: 'small',
  withDarkColor: false,
  paragraphText: 'Small Paragraph',
  withAnimatedPresence: false,
};

export const Medium = Template.bind({});
Medium.args = {
  margin: '0',
  variant: 'medium',
  withDarkColor: false,
  paragraphText: 'Medium Paragraph',
  withAnimatedPresence: true,
};

export const Large = Template.bind({});
Large.args = {
  margin: '0',
  variant: 'large',
  withDarkColor: false,
  paragraphText: 'Large Paragraph',
  withAnimatedPresence: true,
};
