import { Story } from '@storybook/react';
import FilterOption, { Props } from './FilterOption';

export default {
  title: 'Portfolio/FilterOption',
  component: FilterOption,
};

const Template: Story<Props> = (args) => <FilterOption {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'filterOption',
  filterTag: 'typescript',
  action: () => console.log('cool'),
};
