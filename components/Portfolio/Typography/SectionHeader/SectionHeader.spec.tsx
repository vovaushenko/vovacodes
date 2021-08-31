import { shallow } from 'enzyme';
import React from 'react';
import * as Styled from './SectionHeader.styles';

import SectionHeader from './SectionHeader';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(
    <SectionHeader
      margin={'1rem'}
      headerText={'🥦BROCCOLI🥦'}
      color={'red'}
      variant={'small'}
    />
  );
};

describe('Typography / SectionHeader', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should apply specified margin', () => {
    const paragraph = wrap.find(Styled.H1);
    expect(paragraph.prop('margin')).toBe('1rem');
  });

  it('should render proper content', () => {
    const paragraph = wrap.find(Styled.H1);
    expect(paragraph.text()).toBe('🥦BROCCOLI🥦');
  });
});
