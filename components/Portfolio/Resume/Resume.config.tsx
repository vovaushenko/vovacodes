export const keyTechSkills: { text: string; iconUrl: string }[] = [
  {
    text: 'JavaScript',
    iconUrl: '/assets/portfolio/skills/javascript-original.svg',
  },
  {
    text: 'TypeScript',
    iconUrl: '/assets/portfolio/skills/typescript-original.svg',
  },
  {
    text: 'React',
    iconUrl: '/assets/portfolio/skills/react-original.svg',
  },
  {
    text: 'Next.js',
    iconUrl: '/assets/portfolio/skills/nextjs-original.svg',
  },
  {
    text: 'CSS-in-JS',
    iconUrl: '/assets/portfolio/skills/css3-original.svg',
  },
  {
    text: 'Sass',
    iconUrl: '/assets/portfolio/skills/sass-original.svg',
  },
  {
    text: 'Redux',
    iconUrl: '/assets/portfolio/skills/redux-original.svg',
  },
  {
    text: 'Storybook',
    iconUrl: '/assets/portfolio/skills/storybook.png',
  },
  {
    text: 'Jest',
    iconUrl: '/assets/portfolio/skills/jest-plain.svg',
  },
  {
    text: 'Node.js',
    iconUrl: '/assets/portfolio/skills/nodejs-original.svg',
  },
  {
    text: 'Express',
    iconUrl: '/assets/portfolio/skills/express-original.svg',
  },
];

export const otherSkills: { text: string; iconUrl: string }[] = [
  {
    text: 'Git',
    iconUrl: '/assets/portfolio/skills/git-original.svg',
  },
  {
    text: 'GitHub',
    iconUrl: '/assets/portfolio/skills/github-original.svg',
  },
  {
    text: 'Performance Optimization',
    iconUrl: '/assets/portfolio/skills/page-speed.png',
  },
  {
    text: 'Software Testing',
    iconUrl: '/assets/portfolio/skills/developer.png',
  },
  {
    text: 'Responsive Web Design',
    iconUrl: '/assets/portfolio/skills/responsive.png',
  },
  {
    text: 'SE Optimization',
    iconUrl: '/assets/portfolio/skills/seo.png',
  },
  {
    text: 'Figma',
    iconUrl: '/assets/portfolio/skills/figma-original.svg',
  },
  {
    text: 'Webpack Parcel ESBuild',
    iconUrl: '/assets/portfolio/skills/webpack-original.svg',
  },
];

export const professionalExperience: IProfessionalExperience[] = [
  {
    variant: 'simple',
    company: 'Chernivtsi National University',
    companyImg: '/assets/portfolio/uchnu.png',
    role: 'Frontend Developer',
    shortSummary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni architecto, ipsum itaque recusandae dolorum non!',
    timeFrame: '2019-Present',
  },
  {
    variant: 'withResponsibilities',
    company: 'Chernivtsi National University',
    companyImg: '/assets/portfolio/uchnu.png',
    role: 'Frontend Developer',
    shortSummary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni architecto, ipsum itaque recusandae dolorum non!',
    timeFrame: '2019-Present',
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
  },
  {
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
  },
  {
    variant: 'withResponsibilities',
    company: 'CNRS, Ecole Polytechnique, France',
    companyImg: '/assets/portfolio/uecole.png',
    role: 'Postdoc Research Scientist',
    shortSummary:
      'Participated in projects centered on the development of non-invasive cancer-detection algorithms. During the projects, I\n' +
      'expanded my horizons in machine learning and learned various image processing algorithms and methods.',
    timeFrame: '2016 - 2017',
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
  },
];

export type IProfessionalExperience =
  | {
      variant: 'withResponsibilities';
      company: string;
      companyImg: string;
      role: string;
      timeFrame: string;
      shortSummary: string;
      responsibilities: { text: string; iconUrl: string }[];
    }
  | {
      variant: 'simple';
      role: string;
      company: string;
      companyImg: string;
      timeFrame: string;
      shortSummary: string;
    };
