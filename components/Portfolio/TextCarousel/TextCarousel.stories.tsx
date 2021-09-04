import { Story } from '@storybook/react';
import TextCarousel, { Props } from './TextCarousel';
import { projectDetailsQuotes } from '../ProjectDetailsSlide/ProjectDetailsSlide.config';

export default {
  title: 'Portfolio/TextCarousel',
  component: TextCarousel,
};

const Template: Story<Props> = (args) => <TextCarousel {...args} />;

export const Primary = Template.bind({});
Primary.args = { quotes: projectDetailsQuotes };
