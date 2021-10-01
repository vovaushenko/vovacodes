import { Story } from '@storybook/react';
import DevToArticle from './DevToArticle';
import { IDevToArticle } from '../../../types/redux/articles-reducer-types';
import { mockDevToArticle } from './DevToArticle.spec';

export default {
  title: 'Portfolio/DevToArticle',
  component: DevToArticle,
};

const Template: Story<IDevToArticle> = (args) => <DevToArticle {...args} />;

export const Primary = Template.bind({});
Primary.args = { ...mockDevToArticle };
