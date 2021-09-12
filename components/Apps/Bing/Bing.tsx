import React from 'react';
import Iframe from '../../Iframe/Iframe';

interface Props {
  searchQuery: string;
}

/**
 *Returns embedded google search iframe
 *@function GoogleSearch
 *@param {string} searchQuery - search term | query to be passed for searching
 *@returns {JSX.Element} - Rendered GoogleSearch component
 */
const GoogleSearch = ({ searchQuery }: Props): JSX.Element => {
  return (
    <Iframe
      iframeSrc={`https://www.bing.com/search?q=${searchQuery}`}
      iframeSize={{ width: '100%', height: '100%' }}
      title={'Bing'}
      style={{
        border: 'none',
      }}
    />
  );
};

export default GoogleSearch;
