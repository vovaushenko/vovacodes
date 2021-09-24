import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import ContextMenu from './ContextMenu';
import * as Styled from './ContextMenu.styles';
import ContextMenuItem from '../ContextMenuItem/ContextMenuItem';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(
    withReduxAndStyledProviders(
      <ContextMenu
        isOpen={true}
        locationCoordinates={{ x: 777, y: 777 }}
        contextMenuItems={[
          {
            id: 1,
            action: null,
            text: 'AVOCADO',
          },
        ]}
      />
    )
  );
};

describe('ContextMenu', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render list of context menu items', () => {
    const list = wrap.find(Styled.UL);
    expect(list.length).toBe(1);
    const contextMenuItems = wrap.find(ContextMenuItem);
    expect(contextMenuItems.length).toBe(1);
  });
});
