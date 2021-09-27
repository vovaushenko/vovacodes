import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import AppContextMenu from './AppContextMenu';
import ContextMenuItem from '../ContextMenuItem/ContextMenuItem';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */

const setup = () => {
  return mount(
    withReduxAndStyledProviders(
      <AppContextMenu
        appName={'TOMATO'}
        iconSrc={'icon.jpeg'}
        willOpenWindowWith={null}
      />
    )
  );
};

describe('AppContextMenu', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all 8 context menu items', () => {
    const menuItem = wrap.find(ContextMenuItem);
    expect(menuItem.length).toBe(8);
  });
});
