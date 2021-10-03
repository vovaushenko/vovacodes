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
    text: 'Webpack, Lerna, Parcel',
    iconUrl: '/assets/portfolio/skills/webpack-original.svg',
  },
];

export const professionalExperience: IProfessionalExperience[] = [
  {
    variant: 'withResponsibilities',
    company: 'Chernivtsi National University',
    companyImg: '/assets/portfolio/uchnu.png',
    role: 'Full-stack Developer (Contractor)',
    shortSummary:
      'Currently, I work at Chernivtsi National University on a number of educational and Web projects as a front and back end developer. I architect and construct solutions daily used by tens of thousands of students and thousands of employees.',
    timeFrame: '2019-Present',
    responsibilities: [
      {
        text: 'Use bleeding-edge JavaScript solutions to deliver the best imaginable user experience',
        iconUrl: '/assets/portfolio/skills/check.svg',
      },
      {
        text: 'Construct scalable, performant and inclusive Web solutions for customers.',
        iconUrl: '/assets/portfolio/skills/check.svg',
      },
      {
        text: 'Employ the best practices in developing and testing software',
        iconUrl: '/assets/portfolio/skills/check.svg',
      },
      {
        text: 'Supervise, mentor and advise junior colleagues.',
        iconUrl: '/assets/portfolio/skills/check.svg',
      },
    ],
  },
  {
    variant: 'withResponsibilities',
    company: 'Chernivtsi National University',
    companyImg: '/assets/portfolio/uchnu.png',
    role: 'Frontend Developer',
    shortSummary:
      'Learning and expanding my skills in Web development, I have supervised several internal web projects and educational platforms(Moodle) for the University. Played a crucial role in managing, maintaining and upgrading several internal IT projects.',
    timeFrame: '2019-Present',
    responsibilities: [
      {
        text: 'Crafted a scalable component library during migration of legacy Web application.',
        iconUrl: '/assets/portfolio/skills/check.svg',
      },
      {
        text: 'Migrated existing code base from legacy React Class Components to new Hook-based ones',
        iconUrl: '/assets/portfolio/skills/check.svg',
      },
      {
        text: 'Built a client-side multilingual routing system for 3 language locales.',
        iconUrl: '/assets/portfolio/skills/check.svg',
      },
      {
        text: 'Migrated the existing state management to Redux.',
        iconUrl: '/assets/portfolio/skills/check.svg',
      },
    ],
  },
  {
    variant: 'simple',
    company: 'University of Oulu, Finland',
    companyImg: '/assets/portfolio/uoulu.png',
    role: 'Postdoc Research Scientist',
    shortSummary:
      'Participated in projects centered on the development of non-invasive cancer-detection algorithms. During the projects, I\n' +
      'expanded my horizons in machine learning and learned various image processing algorithms and methods.',
    timeFrame: '2017 - 2019',
  },
  {
    variant: 'simple',
    company: 'CNRS, Ecole Polytechnique, France',
    companyImg: '/assets/portfolio/uecole.png',
    role: 'Postdoc Research Scientist',
    shortSummary: `This project was supported by the European Union's Horizon research and innovation programme under the Marie Skłodowska-Curie grant agreement and was aimed on the development of cutting-edge medical image processing techniques`,
    timeFrame: '2016 - 2017',
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
