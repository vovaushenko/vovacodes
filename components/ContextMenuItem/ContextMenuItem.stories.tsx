import { Story } from '@storybook/react';
import ContextMenuItem, { IContextMenuItem } from './ContextMenuItem';

export default {
  title: 'UI/ContextMenuItem',
  component: ContextMenuItem,
};

const Template: Story<IContextMenuItem> = (args) => (
  <ContextMenuItem {...args} />
);

export const NoItemsOnHover = Template.bind({});
NoItemsOnHover.args = {
  id: 1,
  text: 'Refresh',
  action: null,
};
export const WithHoverContent = Template.bind({});
WithHoverContent.args = {
  id: 2,
  text: 'Sort',
  action: null,
  hoverMenuItems: [
    {
      id: 1,
      text: 'By size',
      action: null,
    },
    {
      id: 2,
      text: 'By date',
      action: null,
    },
    {
      id: 1,
      text: 'By price',
      action: null,
    },
  ],
};
