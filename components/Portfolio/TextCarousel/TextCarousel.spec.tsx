import { shallow } from 'enzyme';
import React from 'react';

import TextCarousel from './TextCarousel';
import { projectDetailsQuotes } from '../ProjectDetailsSlide/ProjectDetailsSlide.config';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import * as Styled from './TextCarousel.styles';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<TextCarousel quotes={projectDetailsQuotes} />);
};

describe('TextCarousel', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render carousel header', () => {
    const header = wrap.find(SectionHeader);
    expect(header.length).toBe(1);
  });
  it('should render quote', () => {
    const quote = wrap.find(PortfolioParagraph);
    expect(quote.length).toBe(1);
  });
  it('should render control buttons', () => {
    const controlBtnPrev = wrap.find(Styled.PrevQuote);
    expect(controlBtnPrev.length).toBe(1);
    const controlBtnNext = wrap.find(Styled.NextQuote);
    expect(controlBtnNext.length).toBe(1);
  });
});
