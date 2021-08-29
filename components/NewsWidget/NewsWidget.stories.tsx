import { Story } from '@storybook/react';
import NewsWidget, { Props } from './NewsWidget';

export default {
  title: 'Widgets/NewsWidget',
  component: NewsWidget,
};

const Template: Story<Props> = (args) => <NewsWidget {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  newsSource: 'CNBC',
  backgroundImg: '/assets/images/news-1.jpg',
  newsHeader: "Why is Elon Musk's Mars mission considered most ambitious?",
  newsLink:
    'https://www.cnbc.com/2021/04/23/elon-musk-aiming-for-mars-so-humanity-is-not-a-single-planet-species.html',
};
