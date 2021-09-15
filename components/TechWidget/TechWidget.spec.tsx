import { shallow } from 'enzyme';
import React from 'react';
import TechWidget from './TechWidget';
import * as Styled from './TechWidget.styles';
import Image from 'next/image';
import TextHeader from '../Typography/Header/TextHeader';
import Paragraph from '../Typography/Paragraph/Paragraph';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<TechWidget />);
};

describe('TechWidget', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render react wrapper', () => {
    const reactWrap = wrap.find(Styled.ReactFigure);
    expect(reactWrap.length).toBe(1);
  });
  it('should render react icon', () => {
    const reactIcon = wrap.find(Image);
    expect(reactIcon.prop('src')).toBe(
      '/assets/portfolio/skills/react-original.svg'
    );
  });
  it('should render text', () => {
    const header = wrap.find(TextHeader);
    const text = wrap.find(Paragraph);

    expect(header.length).toBe(1);
    expect(text.length).toBe(1);
  });
});
