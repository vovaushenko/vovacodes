import React from 'react';
import * as Styled from './ArticleFiltersMenu.styles';
import { useArticleFiltersMenuConfig } from './ArticleFiltersMenu.config';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ArticleSortingOption } from '../../../types/redux/articles-reducer-types';
import FilterOption from '../FilterOption/FilterOption';

export interface Props {
  isMenuVisible: boolean;
}

/**
 *Renders sliding modal that is initially hidden. Contains filtering and sorting options for filter/sort dev.to articles
 *@function ArticleFiltersMenu
 *@param {boolean} isMenuVisible - controls visibility of modal, initially translated behind the viewport
 *@returns {JSX.Element} - Rendered ArticleFiltersMenu component
 */
const ArticleFiltersMenu = ({ isMenuVisible }: Props): JSX.Element => {
  const ARTICLE_MENU_WIDTH = 300;
  const { addFilterOption, removeFilterOption, applySortingOption } =
    useActions();
  const { allTags, allSortingOptions } = useArticleFiltersMenuConfig();
  const { filterOptions } = useTypedSelector((state) => state.articles);

  const handleApplyFiltering = (filterOption: string): void => {
    if (filterOptions.includes(filterOption)) {
      removeFilterOption(filterOption);
    } else {
      addFilterOption(filterOption);
    }
  };

  const handleApplySorting = (sortingOption: ArticleSortingOption): void => {
    applySortingOption(sortingOption);
  };

  return (
    <Styled.Container
      isMenuVisible={isMenuVisible}
      menuWidth={ARTICLE_MENU_WIDTH}
    >
      <Styled.TagsWrapper key={String(isMenuVisible) + 1}>
        <Styled.UL>
          {allTags.map((tag, id) => (
            <FilterOption
              variant={'filterOption'}
              key={tag + id}
              action={handleApplyFiltering}
              filterTag={tag}
            >
              {tag}
            </FilterOption>
          ))}
        </Styled.UL>
        <Styled.Header variant={'vertical'}>Filter By Tag</Styled.Header>
      </Styled.TagsWrapper>
      <Styled.SortingTagsWrapper key={String(isMenuVisible) + 2}>
        <Styled.Header variant={'horizontal'}>Sort By Tag</Styled.Header>
        <Styled.UL>
          {allSortingOptions.map((sortingTag, id) => (
            <FilterOption
              key={sortingTag + id}
              variant={'sortingOption'}
              sortingTag={sortingTag}
              action={() => handleApplySorting(sortingTag)}
            >
              {sortingTag}
            </FilterOption>
          ))}
        </Styled.UL>
      </Styled.SortingTagsWrapper>
    </Styled.Container>
  );
};

export default ArticleFiltersMenu;
