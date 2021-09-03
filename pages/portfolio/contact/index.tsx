import type { NextPage } from 'next';
import React from 'react';

import PortfolioLayout from '../../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import Contact from '../../../components/Portfolio/Contact/Contact';

const PortfolioLandingPage: NextPage = () => {
  return (
    <PortfolioLayout title={'Vova Ushenko | Full-Stack Web Developer'}>
      <Contact />
    </PortfolioLayout>
  );
};

export default PortfolioLandingPage;
