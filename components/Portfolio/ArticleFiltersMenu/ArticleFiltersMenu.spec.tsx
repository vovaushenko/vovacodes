import { mount } from 'enzyme';
import React from 'react';
import ArticleFiltersMenu from './ArticleFiltersMenu';
import { withReduxAndStyledProviders } from '../../../test/testUtils';
import * as Styled from './ArticleFiltersMenu.styles';
import '../../__mocks__/matchMedia';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(
    withReduxAndStyledProviders(<ArticleFiltersMenu isMenuVisible={true} />)
  );
};

describe('ArticleFiltersMenu', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render filtering tags', () => {
    const tagsColumn = wrap.find(Styled.TagsWrapper);
    expect(tagsColumn.length).toBe(1);
  });
  it('should render sorting tags ', () => {
    const sortingTagsColumn = wrap.find(Styled.SortingTagsWrapper);
    expect(sortingTagsColumn.length).toBe(1);
  });

  it('should initially hide all sorting and filtering tags', () => {
    const tag = wrap.find(Styled.LI);
    expect(tag.length).toBe(0);
  });
});
