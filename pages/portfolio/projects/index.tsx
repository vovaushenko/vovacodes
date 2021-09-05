import type { NextPage } from 'next';
import React from 'react';

import PortfolioLayout from '../../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import HighlightedProjects from '../../../components/Portfolio/HighlightedProjects/HighlightedProjects';

const PortfolioLandingPage: NextPage = () => {
  return (
    <PortfolioLayout title={'Vova Ushenko | Full-Stack Web Developer'}>
      <HighlightedProjects />
    </PortfolioLayout>
  );
};

export default PortfolioLandingPage;
