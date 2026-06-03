export const keyTechSkills: { text: string; iconUrl: string }[] = [
  {
    text: 'JavaScript, TypeScript',
    iconUrl: '/assets/portfolio/skills/javascript-original.svg',
  },
  {
    text: 'React, Next.js, Lit, Three.js, Astro',
    iconUrl: '/assets/portfolio/skills/react-original.svg',
  },
  {
    text: 'Vitest, Jest, Playwright, Storybook',
    iconUrl: '/assets/portfolio/skills/jest-plain.svg',
  },
  {
    text: 'Java, Node.js, SQL',
    iconUrl: '/assets/portfolio/skills/nodejs-original.svg',
  },
  {
    text: 'Nest.js, Express, Fastify',
    iconUrl: '/assets/portfolio/skills/nestjs-original.svg',
  },
  {
    text: 'Prisma, TypeORM, PM2, Nx, OpenAPI',
    iconUrl: '/assets/portfolio/skills/developer.png',
  },
  {
    text: 'AWS, Docker, Oracle Cloud',
    iconUrl: '/assets/portfolio/skills/aws.svg',
  },
  {
    text: 'Git, GitHub, GitLab, CI/CD',
    iconUrl: '/assets/portfolio/skills/git-original.svg',
  },
];

export const otherSkills: { text: string; iconUrl: string }[] = [
  {
    text: 'OpenAI API, OCI Generative AI',
    iconUrl: '/assets/portfolio/skills/developer.png',
  },
  {
    text: 'Oracle Agent Studio, function calling',
    iconUrl: '/assets/portfolio/skills/developer.png',
  },
  {
    text: 'WebLLM, Hugging Face, LangChain',
    iconUrl: '/assets/portfolio/skills/python-original.svg',
  },
  {
    text: 'RAG, vector search, structured JSON outputs',
    iconUrl: '/assets/portfolio/skills/check.svg',
  },
  {
    text: 'Agentic workflows and AI-driven automation',
    iconUrl: '/assets/portfolio/skills/check.svg',
  },
  {
    text: 'Prompt regression testing and output validation',
    iconUrl: '/assets/portfolio/skills/check.svg',
  },
  {
    text: 'PWA, WebGL, WebAssembly',
    iconUrl: '/assets/portfolio/skills/wasm.svg',
  },
  {
    text: 'Core Web Vitals and performance optimization',
    iconUrl: '/assets/portfolio/skills/vitals.webp',
  },
];

export const professionalExperience: IProfessionalExperience[] = [
  {
    variant: 'withResponsibilities',
    company: 'Oracle',
    companyImg: '/assets/portfolio/oracle-logo.png',
    role: 'Principal Software Engineer',
    shortSummary:
      'Lead frontend development for Oracle CPQ, a platform enabling 500+ global customers to configure, quote, and price complex products. Delivered AI-augmented features including a dynamic quote configuration designer, intelligent layout generation through custom AI agents, natural language-driven 3D configuration, live quote previews, and advanced migration tools.',
    timeFrame: 'Sep 2024 - Present',
    responsibilities: [
      {
        text: 'Developed and patented a quote designer/runtime, empowering rapid configuration and quoting of complex products.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Pioneered AI agent integration to translate CPQ admin prompts into dynamic UI layouts.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Built a browser-based 3D product configurator with natural language controls.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Engineered a flexible product configurator for products ranging from laptops to industrial systems.',
        iconUrl: '/assets/portfolio/check.svg',
      },
    ],
  },
  {
    variant: 'withResponsibilities',
    company: 'Oracle',
    companyImg: '/assets/portfolio/oracle-logo.png',
    role: 'Project Lead Software Development',
    shortSummary:
      'Directed a cross-functional team to re-implement Oracle CPQ, enabling mission-critical quoting and configuration workflows for enterprise clients.',
    timeFrame: 'Mar 2023 - Sep 2024',
    responsibilities: [
      {
        text: 'Defined architecture and coding standards, improving developer efficiency, code quality, and system scalability.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Implemented migration strategy and tooling to transition clients from legacy CPQ.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Mentored and coached team members across the engineering group.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Optimized Core Web Vitals and performance, cutting load times by more than 50%.',
        iconUrl: '/assets/portfolio/check.svg',
      },
    ],
  },
  {
    variant: 'withResponsibilities',
    company: 'Oracle',
    companyImg: '/assets/portfolio/oracle-logo.png',
    role: 'Senior Software Engineer',
    shortSummary:
      "Led modernization and migration of Oracle's largest SaaS CRM application, CX Sales, into the Oracle Fusion Applications ecosystem.",
    timeFrame: 'Dec 2021 - Mar 2023',
    responsibilities: [
      {
        text: 'Enhanced scalability and user experience for global enterprise customers.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Architected and delivered a Zoom-embedded application for Oracle CX Sales.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Prototyped and developed multiple PoC applications for Oracle R&D.',
        iconUrl: '/assets/portfolio/check.svg',
      },
    ],
  },
  {
    variant: 'withResponsibilities',
    company: 'Chernivtsi National University',
    companyImg: '/assets/portfolio/uchnu.png',
    role: 'PhD Researcher, Assistant Professor, Scientist, Software Engineer',
    shortSummary:
      'Advanced academic and applied research career combining biomedical engineering, computer science, and software development. Transitioned from research and teaching into full-stack web development, forming the foundation for my professional career in software engineering.',
    timeFrame: 'Sep 2013 - Dec 2021',
    responsibilities: [
      {
        text: 'Conducted interdisciplinary research on medical image processing and machine learning-based diagnostic algorithms.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Served as Assistant Professor, teaching undergraduate and graduate courses in Computer Science and Networking.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Completed international postdoctoral research appointments with teams across Europe.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Built web-based platforms and applications for university projects.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Publication in Nature | Scientific Reports',
        iconUrl: '/assets/portfolio/quote.svg',
        url: 'https://www.nature.com/articles/s41598-021-83986-4',
      },
      {
        text: 'Google Scholar Profile',
        iconUrl: '/assets/portfolio/check.svg',
        url: 'https://scholar.google.ca/citations?user=Wu7U4yoAAAAJ&hl=en&oi=ao',
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
