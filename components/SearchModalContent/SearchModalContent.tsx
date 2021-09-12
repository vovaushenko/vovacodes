import React, { useState } from 'react';
import * as Styled from './SearchModalContent.styles';
import SearchBar from '../SearchBar/SearchBar';
import DesktopButton from '../DesktopButton/DesktopButton';
import { useSearchModalConfig } from './SearchModalContent.config';
import Paragraph from '../Typography/Paragraph/Paragraph';
import { useActions } from '../../hooks/useActions';
import Bing from '../Apps/Bing/Bing';

/**
 *Renders content for Search Modal with top apps, recent searches and search bar where user can perform live online search
 *@function SearchModalContent
 *@returns {JSX.Element} - Rendered SearchModalContent component
 */
const SearchModalContent = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const { topApps, quickSearches } = useSearchModalConfig();
  const { openWindow } = useActions();

  const handlePerformSearch = (term: string) => {
    openWindow({
      windowName: 'Bing',
      windowContent: <Bing searchQuery={term} />,
      windowIcon: '/assets/icons/startmenu/icons8-microsoft-edge.svg',
      size: {
        width: 0.8 * window.innerWidth,
        height: 0.8 * window.innerHeight,
      },
      isOpen: true,
    });
  };

  const handleOnlineSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlePerformSearch(searchTerm);
  };

  return (
    <Styled.Container>
      <Styled.SearchForm onSubmit={handleOnlineSearch}>
        <SearchBar
          name={'search-bar'}
          type={'text'}
          placeholder={'Type here to search...'}
          value={searchTerm}
          setValue={setSearchTerm}
        />
      </Styled.SearchForm>
      <h3>Top apps</h3>
      <Styled.TopApps>
        {topApps.map((app) => (
          <Styled.TopApp key={app.id}>
            <DesktopButton
              variant={'pinnedApp'}
              iconSrc={app.icon}
              iconSize={app.iconSize}
              text={app.text}
              action={app.action}
              willOpenWindowWith={app.willOpenWindowWith}
            />
          </Styled.TopApp>
        ))}
      </Styled.TopApps>
      <h3>Quick searches</h3>
      <Styled.QuickSearches>
        {quickSearches.map((search) => (
          <Styled.QuickSearch
            key={search.id}
            onClick={() => handlePerformSearch(search.text)}
          >
            {search.icon} <Paragraph margin={'0'}>{search.text}</Paragraph>
          </Styled.QuickSearch>
        ))}
      </Styled.QuickSearches>
    </Styled.Container>
  );
};

export default SearchModalContent;
