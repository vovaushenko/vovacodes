export const authors: IAuthor[] = [
  {
    id: 1,
    name: '🏆 Piyush Suthar',
    url: 'https://piyushsuthar.github.io/',
    github: 'https://github.com/PiyushSuthar',
    acknowledgement:
      'and his great 🚀 Windows 11 Web project 🚀 that inspired me to build this app. Thanks!',
  },
  {
    id: 2,
    name: '🏆 Olaolu Olawuyi',
    url: 'https://olaolu.dev/',
    github: 'https://github.com/whizkydee',
    acknowledgement:
      'and his ✨ beautiful portfolio and invaluable contribution ✨ to the open source community. Thanks!',
  },
  {
    id: 3,
    name: '🏆 Josh Comeau',
    url: 'https://www.joshwcomeau.com/',
    github: 'https://github.com/joshwcomeau',
    acknowledgement:
      'and his 🎉 monumental contribution 🎉 to the education of the community. Thanks!',
  },
  {
    id: 4,
    name: '🏆 Dejan Markovic',
    url: 'https://www.dejan.works/',
    github: null,
    acknowledgement:
      'and his 🎨 unique approach 🎨 to design and stunning portfolio of course. Thanks!',
  },
  {
    id: 5,
    name: '🏆 Next.js and React Teams',
    url: 'https://nextjs.org/',
    github: 'https://github.com/vercel/next.js/',
    acknowledgement:
      'for providing mind-blowing open-source solutions to us and helping us to build a better future for the Web. Thanks!',
  },
];

interface IAuthor {
  id: number;
  name: string;
  url: string;
  github: string | null;
  acknowledgement: string;
}
