import React from 'react';
import * as Styled from './PortfolioLanding.styles';
import AnimatedRouterLink from '../AnimatedRouterLink/AnimatedRouterLink';

/**
 *Renders portfolio landing page
 *@function PortfolioLanding
 *@returns {JSX.Element} - Rendered PortfolioLanding component
 */
const PortfolioLanding = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.Navigation>
        <Styled.LinkWrapper>
          <AnimatedRouterLink
            variant={'standard'}
            text={'Hello'}
            href={'/hello'}
            hoverText={'About'}
          />
          <AnimatedRouterLink
            variant={'standard'}
            text={'I am'}
            href={'/hello'}
            hoverText={'Work'}
          />
          <AnimatedRouterLink
            variant={'highlight'}
            text={'Vova'}
            href={'/hello'}
            hoverText={'Contact'}
          />
        </Styled.LinkWrapper>
      </Styled.Navigation>
      <Styled.Photo photo={'/assets/portfolio/avatar-black-white.png'} />
    </Styled.Container>
  );
};
export default PortfolioLanding;
