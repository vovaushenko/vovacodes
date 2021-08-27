import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import AppCenter from './AppCenter';
import SearchBar from '../SearchBar/SearchBar';

import Avatar from '../Avatar/Avatar';
import PinnedApps from '../PinnedApps/PinnedApps';
import Recommended from '../Recommended/Recommended';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<AppCenter />));
};

describe('AppCenter', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render search bar', () => {
    const searchBar = wrap.find(SearchBar);
    expect(searchBar.length).toBe(1);
  });
  it('should render avatar', () => {
    const avatar = wrap.find(Avatar);
    expect(avatar.length).toBe(1);
  });
  it('should render pinned apps', () => {
    const pinnedApps = wrap.find(PinnedApps);
    expect(pinnedApps.length).toBe(1);
  });
  it('should render recommended apps', () => {
    const recommendedApps = wrap.find(Recommended);
    expect(recommendedApps.length).toBe(1);
  });
});
