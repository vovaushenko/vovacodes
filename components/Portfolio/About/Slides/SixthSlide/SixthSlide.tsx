import React from 'react';
import * as Styled from './SixthSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';
import ActionButton from '../../../ActionButton/ActionButton';
import { FiBookOpen, FiChevronsRight } from 'react-icons/fi';
import { useRouter } from 'next/router';

/**
 *Renders fifth slide in About Portfolio presentation
 *@function SixthSlide
 *@returns {JSX.Element} - Rendered SixthSlide component
 */
const SixthSlide = (): JSX.Element => {
  const router = useRouter();
  const redirectToProjects = () => {
    router.push('/portfolio/projects');
  };
  const redirectToArticles = () => {
    router.push('/articles');
  };
  return (
    <Slide bgColor={'#010606'} height={'100vh'} anchorID={'sixth-slide'}>
      <Styled.SixthSlide>
        <div className="left-column">
          <div className="content-wrapper">
            <SectionHeader
              variant={'small'}
              headerText={'I build & create'}
              margin={'0'}
              color={'#2bff88'}
            />
            <PortfolioParagraph
              margin={'2rem 0 4rem 0'}
              paragraphText={`Web applications, open source projects, tutorials that I'm more than happy to share`}
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            />
            <ActionButton
              buttonText={'See my projects'}
              icon={<FiChevronsRight className="action-icon" />}
              onClick={redirectToProjects}
            />
          </div>
        </div>
        <div className="right-column">
          <div className="content-wrapper">
            <SectionHeader
              variant={'small'}
              headerText={'I write & advise'}
              margin={'0'}
              color={'#2bff88'}
            />
            <PortfolioParagraph
              margin={'2rem 0 4rem 0'}
              paragraphText={
                'About web-development, frontend, typescript and the importance of balance'
              }
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            />
            <ActionButton
              buttonText={'Read my articles'}
              icon={<FiBookOpen className="action-icon" />}
              onClick={redirectToArticles}
            />
          </div>
        </div>
      </Styled.SixthSlide>
    </Slide>
  );
};

export default SixthSlide;
