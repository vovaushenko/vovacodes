import { shallow } from 'enzyme';
import React from 'react';
import Contact from './Contact';
import * as Styled from './Contact.styles';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import ScrollHint from '../ScrollHint/ScrollHint';
import ContactForm from '../ContactForm/ContactForm';
import SocialMediaContact from '../SocialMediaContact/SocialMediaContact';
import '../../__mocks__/intersectionObserverMock';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<Contact />);
};

describe('Contact', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render first slide', () => {
    const firstSlide = wrap.find(Styled.FirstSlide);
    expect(firstSlide.length).toBe(1);
  });
  it('should render correct call to action header', () => {
    const firstSlide = wrap.find(Styled.FirstSlide);
    const callToAction = firstSlide.find(SectionHeader);
    expect(callToAction.text()).toBe(`<TextHeader />`);
  });
  it('should scroll hint', () => {
    const hint = wrap.find(ScrollHint);
    expect(hint.length).toBe(1);
  });

  it('should render second slide', () => {
    const secondSlide = wrap.find(Styled.SecondSlide);
    expect(secondSlide.length).toBe(1);
  });

  it('should render contact form', () => {
    const contactForm = wrap.find(Styled.SecondSlide).find(ContactForm);
    expect(contactForm.length).toBe(1);
  });

  it('should render all social media contacts - (currently 4)', () => {
    const socialContact = wrap
      .find(Styled.SecondSlide)
      .find(SocialMediaContact);
    expect(socialContact.length).toBe(4);
  });
});
