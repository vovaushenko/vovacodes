import { shallow } from 'enzyme';
import React from 'react';
import * as Styled from './PortfolioParagraph.styles';

import PortfolioParagraph from './PortfolioParagraph';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(
    <PortfolioParagraph
      margin={'1rem'}
      paragraphText={'🥦BROCCOLI🥦'}
      withDarkColor={false}
      variant={'small'}
    />
  );
};

describe('Typography / PortfolioParagraph', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should apply specified margin', () => {
    const paragraph = wrap.find(Styled.P);
    expect(paragraph.prop('margin')).toBe('1rem');
  });

  it('should render proper content', () => {
    const paragraph = wrap.find(Styled.P);
    expect(paragraph.text()).toBe('🥦BROCCOLI🥦');
  });
});
