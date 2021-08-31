import React, { FC } from 'react';
import * as Styled from './PortfolioLayout.styles';
import Head from 'next/head';

export interface Props {
  title: string;
}

/**
 *Renders wrapper for desktop screens with system tray
 *@function PortfolioLayout
 *@param {string} title - title to be added to meta description
 *@param {ReactNode} children - content of layout
 *@returns {JSX.Element} - Rendered PortfolioLayout component
 */
const PortfolioLayout: FC<Props> = ({ children, title }): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <title>{title}</title>
      </Head>
      <Styled.Container>{children}</Styled.Container>
    </>
  );
};

export default PortfolioLayout;
