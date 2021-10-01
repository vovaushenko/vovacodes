import React, { useState } from 'react';
import * as Styled from './AllDevToArticles.styles';
import { InlineLink } from './AllDevToArticles.styles';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import DevToArticle from '../DevToArticle/DevToArticle';
import Navbar from '../Navbar/Navbar';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import WithSparkles from '../WithSparkles/WithSparkles';
import ScrollHint from '../ScrollHint/ScrollHint';
import WaveDivider from '../WaveDivider/WaveDivider';
import ArtcileFiltersMenu from '../ArticleFiltersMenu/ArticleFiltersMenu';
import { FiFilter } from 'react-icons/fi';

/**
 *Renders content for article page that maps dev.to api response (with all published articles) into the list of rendered articles
 *@function AllDevToArticles
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered AllDevToArticles component
 */
const AllDevToArticles = (): JSX.Element => {
  const [showFiltersMenu, setShowFiltersMenu] = useState<boolean>(false);
  const { articles } = useTypedSelector((state) => state.articles);

  const toggleFiltersVisibility = () => setShowFiltersMenu((prev) => !prev);

  return (
    <Styled.Container>
      <Navbar isLogoExpanded={true} />

      <Styled.FirstSlide>
        <SectionHeader variant={'medium'} margin={'0'} color={'#fff'}>
          My recent posts from{' '}
          <WithSparkles color={'yellow'}>
            <InlineLink
              href={'https://dev.to/vovacodesca'}
              target="_blank"
              rel="noopener"
            >
              dev.to
            </InlineLink>
          </WithSparkles>
        </SectionHeader>
        <ScrollHint />
      </Styled.FirstSlide>
      <WaveDivider
        waveImg={'/assets/portfolio/blob-2.svg'}
        dividerHeight={'200px'}
      />

      <Styled.SecondSlide>
        <Styled.FiltersToggler onClick={toggleFiltersVisibility}>
          <FiFilter className={'filter__icon'} />
        </Styled.FiltersToggler>
        <ArtcileFiltersMenu isMenuVisible={showFiltersMenu} />
        <Styled.List>
          {articles.map((article) => (
            <Styled.LI key={article.id + article.title}>
              <DevToArticle {...article} />
            </Styled.LI>
          ))}
        </Styled.List>
      </Styled.SecondSlide>
    </Styled.Container>
  );
};

export default AllDevToArticles;
