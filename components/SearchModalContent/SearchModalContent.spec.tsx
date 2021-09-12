import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import SearchModalContent from './SearchModalContent';
import SearchBar from '../SearchBar/SearchBar';
import * as Styled from './SearchModalContent.styles';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<SearchModalContent />));
};

describe('SearchModalContent', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render search bar', () => {
    const searchBar = wrap.find(SearchBar);
    expect(searchBar.length).toBe(1);
  });
  it('should render five top apps', () => {
    const topApps = wrap.find(Styled.TopApp);
    expect(topApps.length).toBe(5);
  });
  it('should render four quick searches', () => {
    const quickSearches = wrap.find(Styled.QuickSearch);
    expect(quickSearches.length).toBe(4);
  });
});
