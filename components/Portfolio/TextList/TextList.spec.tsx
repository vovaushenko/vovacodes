import { shallow } from 'enzyme';
import React from 'react';
import TextList from './TextList';
import * as Styled from './TextList.styles';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = (variant: 'simple' | 'withHeader') => {
  return shallow(
    <TextList
      variant={variant}
      headerText={'TOMATO'}
      textBulletPoints={['css', 'js', 'typescript', 'javascript', 'react']}
    />
  );
};

describe('TextList', () => {
  describe('with header variant', () => {
    const wrap = setup('withHeader');
    it('should render without throwing an error', () => {
      expect(wrap);
      expect(wrap.length).toBe(1);
    });
    it('should render header', () => {
      const header = wrap.find(Styled.ListHeader);
      expect(header.text()).toEqual('TOMATO');
    });
    it('should render all bullet points', () => {
      const bulletPoints = wrap.find(Styled.LI);
      expect(bulletPoints.length).toBe(5);
    });
  });

  describe('simple variant (without header)', () => {
    const wrap = setup('simple');
    it('should render', () => {
      expect(wrap);
      expect(wrap.length).toBe(1);
    });
    it('should NOT render header', () => {
      const header = wrap.find(Styled.ListHeader);
      expect(header.length).toBe(0);
    });
    it('should still render all bullet points', () => {
      const bulletPoints = wrap.find(Styled.LI);
      expect(bulletPoints.length).toBe(5);
    });
  });
});
