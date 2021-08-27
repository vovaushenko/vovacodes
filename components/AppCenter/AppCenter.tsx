import React, { useState } from 'react';
import * as Styled from './AppCenter.styles';
import Button from '../Button/Button';
import PinnedApps from '../PinnedApps/PinnedApps';
import Recommended from '../Recommended/Recommended';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { FiPower } from 'react-icons/fi';
import Avatar from '../Avatar/Avatar';
import SearchBar from '../SearchBar/SearchBar';

/**
 *Renders AppCenter content for sliding modal with search bar, pinned apps and recommended section
 *@function AppCenter
 *@returns {JSX.Element} - Rendered AppCenter component
 */
const AppCenter = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const { theme } = useTypedSelector((state) => state.ui);
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO:Search
  };

  return (
    <Styled.Container>
      <Styled.AllApps themeMode={theme}>
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
          <Button withChevron={true}>All Apps</Button>
        </Styled.SectionHeader>

        <PinnedApps />

        <Styled.SectionHeader margin={'2rem 0 0 0'}>
          <h3>Recommended</h3>
          <Button withChevron={true}>More</Button>
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
