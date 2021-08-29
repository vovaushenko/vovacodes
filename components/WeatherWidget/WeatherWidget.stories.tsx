import { Story } from '@storybook/react';
import WeatherWidget, { Props } from './WeatherWidget';

export default {
  title: 'Widgets/WeatherWidget',
  component: WeatherWidget,
};

const Template: Story<Props> = (args) => (
  <WeatherWidget
    {...args}
    location={'Toronto, Ontario'}
    temperature={72}
    forecastDetails={'Strong UV Today'}
    humidity={0}
    iconSrc={'/assets/icons/widget/sun.svg'}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
