import { mount } from 'enzyme';
import React from 'react';

import Iframe from './Iframe';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return mount(
    <Iframe
      iframeSrc={'TOMATO.IO'}
      title={'TOMATOES ARE NUTRITIOUS'}
      iframeSize={{ width: '1px', height: '1px' }}
    />
  );
};

describe('Iframe', () => {
  const wrap = setup();
  const iframe = wrap.find('iframe');

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should have specified src', () => {
    expect(iframe.prop('src')).toBe('TOMATO.IO');
  });
  it('should have specified title', () => {
    expect(iframe.prop('title')).toBe('TOMATOES ARE NUTRITIOUS');
  });
  it('should have specified width', () => {
    expect(iframe.prop('width')).toBe('1px');
  });
  it('should have specified height', () => {
    expect(iframe.prop('height')).toBe('1px');
  });
});
