import React from 'react';
import Iframe from '../../Iframe/Iframe';

/**
 *Returns embedded google search iframe
 *@function GoogleSearch
 *@returns {JSX.Element} - Rendered GoogleSearch component
 */
const GoogleSearch = (): JSX.Element => {
  return (
    <Iframe
      iframeSrc={'https://www.google.com/webhp?igu=1'}
      iframeSize={{ width: '100%', height: '100%' }}
      title={'GoogleSearch Search'}
      style={{
        border: 'none',
      }}
    />
  );
};

export default GoogleSearch;
