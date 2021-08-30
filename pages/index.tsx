import type { NextPage } from 'next';
import React from 'react';
import Hero from '../components/Hero/Hero';
import DesktopLayout from '../components/DesktopLayout/DesktopLayout';

const Home: NextPage = () => {
  return (
    <DesktopLayout
      title={'Portfolio | Vova Ushenko | Full-Stack Web Developer'}
    >
      <Hero />
    </DesktopLayout>
  );
};

export default Home;
