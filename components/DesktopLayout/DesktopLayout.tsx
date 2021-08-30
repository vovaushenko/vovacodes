import React, { FC } from 'react';
import * as Styled from './DesktopLayout.styles';
import Head from 'next/head';
import SystemTray from '../SystemTray/SystemTray';

export interface Props {
  title: string;
}

/**
 *Renders wrapper for desktop screens with system tray
 *@function DesktopLayout
 *@param {string} title - title to be added to meta description
 *@param {ReactNode} children - content of layout
 *@returns {JSX.Element} - Rendered DesktopLayout component
 */
const DesktopLayout: FC<Props> = ({ children, title }): JSX.Element => {
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
      <Styled.Container>
        {children}
        <SystemTray />
      </Styled.Container>
    </>
  );
};

export default DesktopLayout;
