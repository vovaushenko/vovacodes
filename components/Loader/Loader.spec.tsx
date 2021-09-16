import { shallow } from 'enzyme';
import React from 'react';
import Loader from './Loader';
import Logo from '../Portfolio/Logo/Logo';
import * as Styled from './Loader.styles';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<Loader isOnScreen={true} loadingDuration={500} />);
};

describe('Loader component', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render logo', () => {
    const logo = wrap.find(Logo);
    expect(logo.length).toBe(1);
  });
  it('should render scroll text', () => {
    const scrollText = wrap.find(Styled.ScrollText);
    expect(scrollText.length).toBe(1);
  });
});
