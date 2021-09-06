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
  textBulletPoints: ['css', 'js', 'typescript', 'javascript', 'react'],
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  variant: 'simple',
  textBulletPoints: ['css', 'js', 'typescript', 'javascript', 'react'],
};
