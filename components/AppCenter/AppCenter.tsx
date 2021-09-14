import React, { useState } from 'react';
import * as Styled from './AppCenter.styles';
import Button from '../Button/Button';
import PinnedApps from '../PinnedApps/PinnedApps';
import Recommended from '../Recommended/Recommended';
import { FiPower } from 'react-icons/fi';
import Avatar from '../Avatar/Avatar';
import SearchBar from '../SearchBar/SearchBar';
import Bing from '../Apps/Bing/Bing';
import { useActions } from '../../hooks/useActions';

/**
 *Renders AppCenter content for sliding modal with search bar, pinned apps and recommended section
 *@function AppCenter
 *@returns {JSX.Element} - Rendered AppCenter component
 */
const AppCenter = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
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

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlePerformSearch(searchTerm);
  };

  return (
    <Styled.Container>
      <Styled.AllApps>
        <Styled.SearchBarForm onSubmit={handleSearch}>
          <SearchBar
            name={'search-bar'}
            type={'text'}
            placeholder={'Type here to search'}
            value={searchTerm}
            setValue={setSearchTerm}
          />
        </Styled.SearchBarForm>
        <Styled.SectionHeader margin={'0 0 1rem 0'}>
          <h3>Pinned</h3>
          <Button withChevron={true} variant={'standardBtn'}>
            All Apps
          </Button>
        </Styled.SectionHeader>

        <PinnedApps />

        <Styled.SectionHeader margin={'2rem 0 0 0'}>
          <h3>Recommended</h3>
          <Button withChevron={true} variant={'standardBtn'}>
            More
          </Button>
        </Styled.SectionHeader>

        <Recommended />
      </Styled.AllApps>
      <Styled.Footer>
        <Avatar
          src={'/assets/avatar.jpeg'}
          firstName={'vova'}
          lastName={'ushenko'}
          isActive={false}
          hasBadge={false}
          width={'45px'}
        />
        <Styled.PowerOff>
          <FiPower className={'power-off'} />
        </Styled.PowerOff>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default AppCenter;
