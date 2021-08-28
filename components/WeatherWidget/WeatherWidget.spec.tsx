import { shallow } from 'enzyme';
import React from 'react';
import WeatherWidget from './WeatherWidget';
import Image from 'next/image';
import * as Styled from './WeatherWidget.styles';
import TextHeader from '../Typography/Header/TextHeader';
import Paragraph from '../Typography/Paragraph/Paragraph';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(
    <WeatherWidget
      location={'Toronto, Ontario'}
      temperature={72}
      forecastDetails={'Strong UV Today'}
      humidity={0}
      iconSrc={'/assets/icons/widget/sun.svg'}
    />
  );
};

describe('WeatherWidget', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render image with specified params', () => {
    const image = wrap.find(Image);
    expect(image.length).toBe(1);
    expect(image.prop('height')).toBe(60);
    expect(image.prop('width')).toBe(60);
  });
  it('should render location', () => {
    const location = wrap.find(Styled.Location);
    expect(location.length).toBe(1);
    const text = location.find(TextHeader);
    expect(text.length).toBe(1);
  });
  it('should render specified temperature', () => {
    const temperature = wrap.find(Styled.Temperature).find('p');
    expect(temperature.text()).toBe('72F');
  });
  it('should render specified humidity', () => {
    const humidity = wrap.find(Styled.Humidity).find(Paragraph);
    expect(humidity.length).toBe(1);
  });
});
