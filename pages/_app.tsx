import type { AppProps } from 'next/app';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { wrapper } from '../store';
import { darkTheme, lightTheme } from '../styles/appThemes';
import { GlobalStyles } from '../styles/globalStyle';
import '../styles/index.css';

const WrappedApp: FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  const { theme } = useTypedSelector((state) => state.ui);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(WrappedApp);
