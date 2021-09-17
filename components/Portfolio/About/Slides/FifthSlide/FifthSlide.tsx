import React from 'react';
import * as Styled from './FifthSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';

/**
 *Renders fifth slide in About Portfolio presentation
 *@function FifthSlide
 *@returns {JSX.Element} - Rendered FifthSlide component
 */
const FifthSlide = (): JSX.Element => {
  return (
    <Slide bgColor={'#010606'} height={'100vh'} anchorID={'fifth-slide'}>
      <Styled.FifthSlide>
        <SectionHeader
          variant={'small'}
          headerText={'Highlighted milestones'}
          margin={'0'}
          color={'#2bff88'}
        />
        <Styled.Milestone>
          <Styled.MilestoneHeader>
            <h3>Full-Stack Developer</h3>
            <time>2017-2021</time>
          </Styled.MilestoneHeader>
          <h4>Chernivtsi National University, Ukraine</h4>
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={
              'Learning and expanding my skills in web development, I have done several projects and designed websites for the University. I was responsible for the Web presence of our department. I was working on internal web applications, specializing in design and front-end development with React. My most noticeable project was a full-stack testing application that I created using React.js, Node.js, and MongoDB for internal testing assesments.'
            }
            withDarkColor={false}
            variant={'medium'}
            withAnimatedPresence={true}
          />
        </Styled.Milestone>

        <Styled.Milestone>
          <Styled.MilestoneHeader>
            <h3>POSTDOC RESEARCH SCIENTIST</h3>
            <time>2017-2019</time>
          </Styled.MilestoneHeader>
          <h4>University of Oulu, Finland</h4>
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={
              'The main aim of the project was to develop cutting-edge methods of 2-D and 3-D polarization tomography for various medical tasks such as early diagnosis of cancer. I was responsible for digital image processing with the use of Matlab and Python OpenCV.'
            }
            withDarkColor={false}
            variant={'medium'}
            withAnimatedPresence={true}
          />
        </Styled.Milestone>

        <Styled.Milestone>
          <Styled.MilestoneHeader>
            <h3>LECTURER/ASSISTANT PROFESSOR</h3>
            <time>2014-2017</time>
          </Styled.MilestoneHeader>
          <h4>Chernivtsi National University, Ukraine</h4>
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={
              'I taught Photonics, Digital Image Processing and Hands-on lab-based courses at a the university in Chernivtsi where I helped students to gain not only theoretical knowledge, but also practical experience in optics & computer science.'
            }
            withDarkColor={false}
            variant={'medium'}
            withAnimatedPresence={true}
          />
        </Styled.Milestone>
      </Styled.FifthSlide>
    </Slide>
  );
};

export default FifthSlide;
