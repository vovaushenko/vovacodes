import { mount } from 'enzyme';
import Head from 'next/head';

import React from 'react';
import DesktopLayout from './DesktopLayout';
import SystemTray from '../SystemTray/SystemTray';
import { withReduxAndStyledProviders } from '../../test/testUtils';

describe('DesktopLayout wrapper component', () => {
  const wrapper = mount(
    withReduxAndStyledProviders(
      <DesktopLayout title="Some Title" entranceAnimationDelay={777}>
        <h1>🍏Apples are nutritious🍏</h1>
      </DesktopLayout>
    )
  );

  it('should render with no errors', () => {
    expect(wrapper);
    expect(wrapper.length).toBe(1);
  });

  it('should render correct title', () => {
    const head = wrapper.find(Head);

    expect(head.length).toBe(1);
  });
  it('should render wrapped children', () => {
    const children = wrapper.find('h1');
    expect(children.length).toBe(1);
    expect(children.text()).toBe('🍏Apples are nutritious🍏');
  });
  it('should render System Tray', () => {
    const navbar = wrapper.find(SystemTray);
    expect(navbar.length).toBe(1);
  });
});
