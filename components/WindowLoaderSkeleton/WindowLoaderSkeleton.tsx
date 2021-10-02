import React from 'react';
import * as Styled from './WindowLoaderSkeleton.styles';

/**
 *Renders loading skeleton for desktop windows, that takes all height of the container and indicates progressing loading
 *@function WindowLoaderSkeleton
 *@returns {JSX.Element} - Rendered WindowLoaderSkeleton component
 */
const WindowLoaderSkeleton = (): JSX.Element => {
  return <Styled.Container />;
};

export default WindowLoaderSkeleton;
