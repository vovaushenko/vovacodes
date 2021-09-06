import { shallow } from 'enzyme';
import React from 'react';
import * as Styled from './ProfessionalExperience.styles';
import ProfessionalExperience from './ProfessionalExperience';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import TextList from '../TextList/TextList';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(
    <ProfessionalExperience
      variant="simple"
      company="TOMATO CORP"
      companyImg="tomato.png"
      role="ASPARAGUS Developer"
      shortSummary="TOMATO"
      timeFrame="2019-Present"
    />
  );
};

describe('ProfessionalExperience', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render correct company', () => {
    const company = wrap.find(Styled.Company);
    expect(company.length).toBe(1);
  });
  it('should render correct role', () => {
    const role = wrap.find(Styled.Role);
    expect(role.text()).toBe('ASPARAGUS Developer');
  });
  it('should render correct time frame', () => {
    const timeFrame = wrap.find(Styled.TimeFrame);
    expect(timeFrame.text()).toBe('2019-Present');
  });

  it('should render paragraph with short description', () => {
    const paragraph = wrap.find(PortfolioParagraph);
    expect(paragraph.length).toBe(1);
  });

  it('should NOT render responsibilities for simple variant', () => {
    const textList = wrap.find(TextList);
    expect(textList.length).toBe(0);
  });
});
