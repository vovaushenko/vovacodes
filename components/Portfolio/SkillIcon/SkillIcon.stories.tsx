import { Story } from '@storybook/react';
import SkillIcon, { Props } from './SkillIcon';

export default {
  title: 'Portfolio/SkillIcon',
  component: SkillIcon,
};

const Template: Story<Props> = (args) => <SkillIcon {...args} />;

export const React = Template.bind({});
React.args = {
  text: 'React',
  iconSrc: 'assets/portfolio/skills/react-original.svg',
  iconSize: { height: 50, width: 50 },
};
