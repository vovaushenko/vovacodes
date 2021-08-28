import { shallow } from 'enzyme';
import React from 'react';
import * as Styled from './TextHeader.styles';

import Header from './TextHeader';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(
    <Header margin={'1rem'} isBold={true}>
      🥦BROCCOLI🥦
    </Header>
  );
};

describe('Typography / Header', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should apply specified margin', () => {
    const paragraph = wrap.find(Styled.H3);
    expect(paragraph.prop('margin')).toBe('1rem');
  });

  it('should render proper content', () => {
    const paragraph = wrap.find(Styled.H3);
    expect(paragraph.text()).toBe('🥦BROCCOLI🥦');
  });
});
