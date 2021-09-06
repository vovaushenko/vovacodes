import { Story } from '@storybook/react';
import ProfessionalExperience, { Props } from './ProfessionalExperience';

export default {
  title: 'Portfolio/Resume/ProfessionalExperience',
  component: ProfessionalExperience,
};

const Template: Story<Props> = (args) => <ProfessionalExperience {...args} />;

export const SimpleVariant = Template.bind({});
SimpleVariant.args = {
  variant: 'simple',
  company: 'Chernivtsi National University',
  companyImg: '/assets/portfolio/uchnu.png',
  role: 'Frontend Developer',
  shortSummary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni architecto, ipsum itaque recusandae dolorum non!',
  timeFrame: '2019-Present',
};

export const WithResponsibilities = Template.bind({});
WithResponsibilities.args = {
  variant: 'withResponsibilities',
  company: 'University of Oulu, Finland',
  companyImg: '/assets/portfolio/uoulu.png',
  role: 'Postdoc Research Scientist',
  shortSummary:
    'Participated in projects centered on the development of non-invasive cancer-detection algorithms. During the projects, I\n' +
    'expanded my horizons in machine learning and learned various image processing algorithms and methods.',
  timeFrame: '2017 - 2019',
  responsibilities: [
    {
      text: 'Crafted a scalable component library that enforced accessibility and fluency across the application.',
      iconUrl: '/assets/portfolio/skills/check.svg',
    },
    {
      text: 'Built a multi-role user authentication system from the ground up with JavaScript.',
      iconUrl: '/assets/portfolio/skills/check.svg',
    },
    {
      text: 'Implemented a client-side localization system for the entire app.',
      iconUrl: '/assets/portfolio/skills/check.svg',
    },
    {
      text: 'Built a client-side multilingual routing system with solid navigation guards.',
      iconUrl: '/assets/portfolio/skills/check.svg',
    },
  ],
};
