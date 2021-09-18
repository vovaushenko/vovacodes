import { shallow } from 'enzyme';
import React from 'react';
import SecondSlide from './SecondSlide';
import '../../../../__mocks__/intersectionObserverMock';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<SecondSlide />);
};

describe('SecondSlide', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render left column', () => {
    const leftColumn = wrap.find('.left-column');
    expect(leftColumn.length).toBe(1);
  });
  it('should right column', () => {
    const rightColumn = wrap.find('.right-column');
    expect(rightColumn.length).toBe(1);
  });
  it('should render two paragraphs', () => {
    const paragraphs = wrap.find(PortfolioParagraph);
    expect(paragraphs.length).toBe(2);
  });
  it('should render two headers', () => {
    const headers = wrap.find(SectionHeader);
    expect(headers.length).toBe(2);
  });
});
