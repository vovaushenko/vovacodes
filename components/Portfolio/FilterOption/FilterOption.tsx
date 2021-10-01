import React, { useState } from 'react';
import * as Styled from './FilterOption.styles';
import { ArticleSortingOption } from '../../../types/redux/articles-reducer-types';

export type Props =
  | {
      variant: 'sortingOption';
      sortingTag: ArticleSortingOption;
      action: (sortingOption: ArticleSortingOption) => void;
    }
  | {
      variant: 'filterOption';
      filterTag: string;
      action: (filterOption: string) => void;
    };

/**
 *Renders filter option for ArticleFiltersMenu modal. Has local state to indicate active/inactive state of selection
 *@function FilterOption
 *@param {enum} variant - specifies whether this is a filter or sorting option, depending on this props will vary
 *@param {string} sortingTag - name of sorting tag
 *@param {string} filterOption - name of filtering tag
 *@param {function} action - action to be applied in onClick handler (thunk action creator)
 *@returns {JSX.Element} - Rendered FilterOption component
 */
const FilterOption: React.FunctionComponent<Props> = (props): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    if (props.variant === 'sortingOption') props.action(props.sortingTag);
    if (props.variant === 'filterOption') props.action(props.filterTag);
    setIsActive((prev) => !prev);
  };

  return (
    <Styled.Container isActive={isActive} onClick={handleClick}>
      {props.children}
    </Styled.Container>
  );
};

export default FilterOption;
