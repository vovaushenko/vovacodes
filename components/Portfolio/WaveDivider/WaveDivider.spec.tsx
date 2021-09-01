import { shallow } from 'enzyme';
import React from 'react';
import WaveDivider from './WaveDivider';
import * as Styled from './WaveDivider.styles';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(
    <WaveDivider waveImg={'/cool/image.jpg'} dividerHeight={'150px'} />
  );
};

describe('WaveDivider', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render wave divider', () => {
    const divider = wrap.find(Styled.Wave);
    expect(divider.length).toBe(1);
  });
});
