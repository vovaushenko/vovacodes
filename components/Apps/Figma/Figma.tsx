import React from 'react';
import Iframe from '../../Iframe/Iframe';

/**
 *Returns embedded figma project iframe
 *@function Figma
 *@returns {JSX.Element} - Rendered Figma component
 */
const Figma = (): JSX.Element => {
  return (
    <Iframe
      iframeSrc={
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fltj8pcOoozkTxq8aLWVW51%2FPortfolio-assets'
      }
      iframeSize={{ width: '100%', height: '100%' }}
      title={'Figma'}
      style={{
        border: 'none',
      }}
    />
  );
};

export default Figma;
