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
import AllAppsModal from '../AllAppsModal/AllAppsModal';
import { useRouter } from 'next/router';

/**
 *Renders AppCenter content with search bar, pinned apps and recommended section
 *Has two sections. Initial screen and expanded list of all apps that are controlled through "isAllAppsOnScreen" flag
 *@function AppCenter
 *@returns {JSX.Element} - Rendered AppCenter component
 */
const AppCenter = (): JSX.Element => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isAllAppsOnScreen, setIsAllAppsOnScreen] = useState<boolean>(true);
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
      {isAllAppsOnScreen ? (
        <Styled.InitialScreen>
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
              <Button
                withChevron={true}
                variant={'standardBtn'}
                onClick={() => setIsAllAppsOnScreen((p) => !p)}
              >
                All Apps
              </Button>
            </Styled.SectionHeader>

            <PinnedApps />

            <Styled.SectionHeader margin={'2rem 0 0 0'}>
              <h3>Recommended</h3>
              <Button
                withChevron={true}
                variant={'standardBtn'}
                onClick={() => setIsAllAppsOnScreen((p) => !p)}
              >
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
              onClick={() => router.push('/portfolio')}
            />
            <Styled.PowerOff>
              <FiPower className={'power-off'} />
            </Styled.PowerOff>
          </Styled.Footer>
        </Styled.InitialScreen>
      ) : (
        <Styled.AllAppsList>
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
            <h3>All Apps</h3>
            <Button
              withChevron={false}
              withLeftChevron
              variant={'standardBtn'}
              onClick={() => setIsAllAppsOnScreen((p) => !p)}
            >
              Back
            </Button>
          </Styled.SectionHeader>
          <AllAppsModal />
        </Styled.AllAppsList>
      )}
    </Styled.Container>
  );
};
export default AppCenter;
