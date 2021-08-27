/**
 * Custom hook that returns prepared recommended apps config
 *@function useRecommendedConfig
 *@returns {IRecommendedFile[]} recommendedFiles - objects to be mapped into list of recommended files and apps
 */
export const useRecommendedConfig = (): {
  recommendedFiles: IRecommendedFile[];
} => {
  const recommendedFiles: IRecommendedFile[] = [
    {
      id: 1,
      fileName: 'LinkedIn',
      details: 'Connect on Linkedin',
      icon: '/assets/icons/recommended/linkedin.svg',
      action: () => console.log('click'),
      iconSize: { height: 44, width: 44 },
    },
    {
      id: 2,
      fileName: 'CurrentResume',
      details: 'Sunday at 10:14 AM',
      icon: '/assets/icons/recommended/word.png',
      action: () => console.log('click'),
      iconSize: { height: 40, width: 40 },
    },
    {
      id: 3,
      fileName: 'Cover Letter',
      details: 'August 26',
      icon: '/assets/icons/recommended/word.png',
      action: () => console.log('click'),
      iconSize: { height: 40, width: 40 },
    },
    {
      id: 4,
      fileName: 'Recent Projects',
      details: 'August 25',
      icon: '/assets/icons/recommended/power-point.png',
      action: () => console.log('click'),
      iconSize: { height: 40, width: 40 },
    },
    {
      id: 5,
      fileName: 'Twitter',
      details: 'Connect on Twitter',
      icon: '/assets/icons/recommended/twitter.svg',
      action: () => console.log('click'),
      iconSize: { height: 40, width: 40 },
    },
    {
      id: 6,
      fileName: 'Terminal',
      details: 'Recently added',
      icon: '/assets/icons/recommended/terminal.png',
      action: () => console.log('click'),
      iconSize: { height: 40, width: 40 },
    },
  ];

  return {
    recommendedFiles,
  };
};

interface IRecommendedFile {
  id: number;
  fileName: string;
  details: string;
  icon: string;
  action: () => void;
  iconSize: { height: number; width: number };
}
