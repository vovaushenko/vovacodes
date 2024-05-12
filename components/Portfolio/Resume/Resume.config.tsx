export const keyTechSkills: { text: string; iconUrl: string }[] = [
  {
    text: 'JavaScript',
    iconUrl: '/assets/portfolio/skills/javascript-original.svg',
  },

  {
    text: 'Node.js',
    iconUrl: '/assets/portfolio/skills/nodejs-original.svg',
  },
  {
    text: 'PWA',
    iconUrl: '/assets/portfolio/skills/pwa.png',
  },
  {
    text: 'Core Web Vitals',
    iconUrl: '/assets/portfolio/skills/vitals.webp',
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
    text: 'Rust',
    iconUrl: '/assets/portfolio/skills/rust-original.svg',
  },
];

export const otherSkills: { text: string; iconUrl: string }[] = [
  {
    text: 'Web Assembly',
    iconUrl: '/assets/portfolio/skills/wasm.svg',
  },

  {
    text: 'AWS',
    iconUrl: '/assets/portfolio/skills/aws.svg',
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
    text: 'GitHub',
    iconUrl: '/assets/portfolio/skills/github-original.svg',
  },
  {
    text: 'SE Optimization',
    iconUrl: '/assets/portfolio/skills/seo.png',
  },
  {
    text: 'Git',
    iconUrl: '/assets/portfolio/skills/git-original.svg',
  },
  {
    text: 'Figma',
    iconUrl: '/assets/portfolio/skills/figma-original.svg',
  },
  {
    text: 'Vite',
    iconUrl: '/assets/portfolio/skills/vitejs-original.svg',
  },
  {
    text: 'Webpack, Lerna, Parcel',
    iconUrl: '/assets/portfolio/skills/webpack-original.svg',
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
    text: 'NestJS',
    iconUrl: '/assets/portfolio/skills/nestjs-original.svg',
  },
  {
    text: 'Express',
    iconUrl: '/assets/portfolio/skills/express-original.svg',
  },
];

export const professionalExperience: IProfessionalExperience[] = [
  {
    variant: 'withResponsibilities',
    company: 'Oracle',
    companyImg: '/assets/portfolio/oracle-logo.png',
    role: 'Software Development Project Lead',
    shortSummary:
      'I currently lead the frontend development of a modernized version of Oracle CPQ (Configure, Price, Quote). A dynamic application that helps over 500 large customers to configure complex products and services, price them according to the rules and constraints, and generate quotes and proposals.',
    timeFrame: '2023-Present',
    responsibilities: [
      {
        text: '"Outstanding Contribution" award for the contribution to the Oracle CPQ project',
        iconUrl: '/assets/portfolio/star.svg',
        url: '/assets/portfolio/oracle-award.pdf',
      },
      {
        text: 'Key role in re-implementation of Oracle CPQ',
        iconUrl: '/assets/portfolio/check.svg',
        url: 'https://www.oracle.com/ca-en/cx/sales/cpq/',
      },
      {
        text: 'Improved peformance and load time of the application by over 50% targeting Core Web Vitals',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Built migration tools for helping customers to seamlessly migrate from legacy CPQ to the new version',
        iconUrl: '/assets/portfolio/check.svg',
      },
    ],
  },
  {
    variant: 'withResponsibilities',
    company: 'Oracle',
    companyImg: '/assets/portfolio/oracle-logo.png',
    role: 'Senior Software Engineer',
    shortSummary: `As a senior engineer, I have contributed to the biggest customer facing applications and services of Oracle CX. I prototyped, designed and helped my team to build a Zoom application integration for Oracle CX Sales (CRM Selling System) from scratch. Played a key role in the modernization and re-implementation of biggest Oracle's CRM - CX Sales.`,
    timeFrame: '2021-2023',
    responsibilities: [
      {
        text: 'Key contribution to the modernization of the biggest Oracle CRM - CX Sales',
        iconUrl: '/assets/portfolio/check.svg',
        url: 'https://www.oracle.com/ca-en/cx/sales/',
      },
      {
        text: 'Architeched and built a dynamic application in embedded Zoom environment for Oracle CX Sales CRM',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Helped to identify and fix performance bottlenecks in the modernized application',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Prototyped and build a number of POC applications for R&D at Oracle',
        iconUrl: '/assets/portfolio/check.svg',
      },
    ],
  },
  {
    variant: 'withResponsibilities',
    company: 'Chernivtsi National University',
    companyImg: '/assets/portfolio/uchnu.png',
    role: 'Full-stack Developer (Contractor)',
    shortSummary:
      'I worked at Chernivtsi National University on a number of educational and Web projects as a front and back end developer. I architected and constructed solutions daily used by tens of thousands of students and thousands of employees.',
    timeFrame: '2019-2021',
    responsibilities: [
      {
        text: 'Use bleeding-edge JavaScript solutions to deliver the best imaginable user experience',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Construct scalable, performant and inclusive Web solutions for customers.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Employ the best practices in developing and testing software',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Supervise, mentor and advise junior colleagues.',
        iconUrl: '/assets/portfolio/check.svg',
      },
    ],
  },
  {
    variant: 'withResponsibilities',
    company: 'Chernivtsi National University',
    companyImg: '/assets/portfolio/uchnu.png',
    role: 'Applied Scientist',
    shortSummary:
      'I worked in an interdisplinary international research team on the development of cutting-edge medical image processing techniques. I have published a number of papers in high-impact journals and conferences.',
    timeFrame: '2016-2019',
    responsibilities: [
      {
        text: 'Google Scholar Profile',
        iconUrl: '/assets/portfolio/check.svg',
        url: 'https://scholar.google.ca/citations?user=Wu7U4yoAAAAJ&hl=en&oi=ao',
      },
      {
        text: 'Publication in Nature | Scientific Reports',
        iconUrl: '/assets/portfolio/quote.svg',
        url: 'https://www.nature.com/articles/s41598-021-83986-4',
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
        text: 'Publication in Nature | Scientific Reports',
        iconUrl: '/assets/portfolio/quote.svg',
        url: 'https://www.nature.com/articles/s41598-021-83986-4',
      },
    ],
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
      responsibilities: { text: string; iconUrl: string; url?: string }[];
    }
  | {
      variant: 'simple';
      role: string;
      company: string;
      companyImg: string;
      timeFrame: string;
      shortSummary: string;
    };
