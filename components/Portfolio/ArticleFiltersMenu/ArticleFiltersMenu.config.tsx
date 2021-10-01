import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ArticleSortingOption } from '../../../types/redux/articles-reducer-types';

/**
 * Custom hook used to get configuration data for articles filters modal
 *@function useArticleFiltersMenuConfig
 *@returns {object} configurationObject - object with all filter and sorting options
 */

export const useArticleFiltersMenuConfig = (): {
  allTags: Array<string>;
  allSortingOptions: Array<ArticleSortingOption>;
} => {
  const { articles } = useTypedSelector((state) => state.articles);

  const allTags = articles.reduce(
    (acc, article) => [...acc, ...article.tag_list],
    [] as Array<string>
  );

  const allSortingOptions: Array<ArticleSortingOption> = [
    'likes',
    'date',
    'views',
  ];

  return { allTags, allSortingOptions };
};
