import { shallow } from 'enzyme';
import React from 'react';
import Acknowledgments from './Acknowledgments';
import { authors } from './Acknowledgments.config';
import * as Styled from './Acknowledgments.styles';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<Acknowledgments />);
};

describe('Acknowledgments', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all acknowledgments', () => {
    const acknowledgments = wrap.find(Styled.AuthorCard);
    expect(acknowledgments.length).toBe(authors.length);
  });
});
