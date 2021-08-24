import { shallow } from 'enzyme';
import React from 'react';
import * as Styled from './Paragraph.styles';

import Paragraph from './Paragraph';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<Paragraph margin={'1rem'}>🍅TOMATO🍅</Paragraph>);
};

describe('Typography / Paragraph', () => {
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
    expect(paragraph.text()).toBe('🍅TOMATO🍅');
  });
});
