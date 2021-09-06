import { Story } from '@storybook/react';
import TextList, { ListProps } from './TextList';

export default {
  title: 'Portfolio/TextList',
  component: TextList,
};

const Template: Story<ListProps> = (args) => <TextList {...args} />;

export const WithHeader = Template.bind({});
WithHeader.args = {
  variant: 'withHeader',
  headerText: 'Skills',
  textBulletPoints: [
    {
      text: 'Test',
      iconUrl: '/assets/portfolio/skills/check.svg',
    },
    {
      text: 'Test',
      iconUrl: '/assets/portfolio/skills/check.svg',
    },
    {
      text: 'Test',
      iconUrl: '/assets/portfolio/skills/check.svg',
    },
  ],
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  variant: 'simple',
  textBulletPoints: [
    {
      text: 'Test',
      iconUrl: '/assets/portfolio/skills/check.svg',
    },
    {
      text: 'Test',
      iconUrl: '/assets/portfolio/skills/check.svg',
    },
    {
      text: 'Test',
      iconUrl: '/assets/portfolio/skills/check.svg',
    },
  ],
};
