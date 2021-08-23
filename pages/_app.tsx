import type { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): unknown {
  return <Component {...pageProps} />;
}
export default MyApp;
