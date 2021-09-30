import React from 'react';
import * as Styled from './AllDevToArticles.styles';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import DevToArticle from '../DevToArticle/DevToArticle';
import Navbar from '../Navbar/Navbar';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import WithSparkles from '../WithSparkles/WithSparkles';
import ScrollHint from '../ScrollHint/ScrollHint';
import WaveDivider from '../WaveDivider/WaveDivider';

/**
 *Renders content for article page that maps dev.to api response (with all published articles) into the list of rendered articles
 *@function AllDevToArticles
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered AllDevToArticles component
 */
const AllDevToArticles = (): JSX.Element => {
  const { articles } = useTypedSelector((state) => state.articles);
  return (
    <Styled.Container>
      <Navbar isLogoExpanded={true} />

      <Styled.FirstSlide>
        <SectionHeader variant={'medium'} margin={'0'} color={'#fff'}>
          My recent posts from{' '}
          <WithSparkles color={'yellow'}>dev.to</WithSparkles>
        </SectionHeader>
        <ScrollHint />
      </Styled.FirstSlide>
      <WaveDivider
        waveImg={'/assets/portfolio/blob-2.svg'}
        dividerHeight={'200px'}
      />

      <Styled.SecondSlide>
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
