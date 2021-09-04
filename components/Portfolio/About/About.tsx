import React from 'react';
import * as Styled from './About.styles';
import Slide from '../Slide/Slide';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import WaveDivider from '../WaveDivider/WaveDivider';
import { useAboutConfig } from './About.config';
import SkillIcon from '../SkillIcon/SkillIcon';
import SkillListItem from '../SkillListItem/SkillListItem';
import ActionButton from '../ActionButton/ActionButton';
import { FiBookOpen, FiChevronsRight } from 'react-icons/fi';
import ScrollHint from '../ScrollHint/ScrollHint';
import Image from 'next/image';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

/**
 *Renders About section in resume
 *@function About
 *@returns {JSX.Element} - Rendered CardContent component
 */
const About = (): JSX.Element => {
  const {
    frontendSkills,
    frontendTechSkills,
    backendSkills,
    backendTechSkills,
  } = useAboutConfig();

  return (
    <Styled.Container>
      <NavigationMenu />
      {/*   FIRST SLIDE   */}
      <Slide bgColor={'#010606'} height={`100vh`} anchorID={'first-slide'}>
        <Styled.FirstSlide id={'first-slide'} className="page first-page">
          <SectionHeader
            variant={'large'}
            headerText={'Full-stack Developer'}
            margin={'0'}
            color={'#2bff88'}
          />
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={
              'I like to craft solid and scalable web products with great user experiences.'
            }
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence={true}
          />
          <ScrollHint />
        </Styled.FirstSlide>
      </Slide>
      <WaveDivider
        waveImg={'/assets/portfolio/blob-1.svg'}
        dividerHeight={'150px'}
      />
      {/*   SECOND SLIDE   */}
      <Slide bgColor={'#4831d4'} height={'100vh'} anchorID={''}>
        <Styled.SecondSlide className="page second-page">
          <div className="left-column">
            <SectionHeader
              variant={'medium'}
              headerText={'Design'}
              margin={'0'}
              color={'#2bff88'}
            />

            <PortfolioParagraph
              margin={'0'}
              paragraphText={
                'I am a developer driven by quality of code and software. I continuously strive to improve myself and for opportunities to help my team grow.\n' +
                "I've created full-stack projects with React & Node.js. I Have excellent knowledge of modern JS stack for building complex user interfaces for the web platform."
              }
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            />
          </div>
          <div className="right-column">
            <PortfolioParagraph
              margin={'0'}
              paragraphText={
                'In building JavaScript applications, I have a strong passion to build elegant, performant and user-friendly experiences. For the last 2 years I mostly worked with the React stack and building products from the ground up, including collecting business requirements, composing full-featured UX designs and architecting frontends.'
              }
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            />
            <SectionHeader
              variant={'medium'}
              headerText={'Engineering'}
              margin={'0'}
              color={'#2bff88'}
            />
          </div>
        </Styled.SecondSlide>
      </Slide>

      <WaveDivider
        waveImg={'/assets/portfolio/blob-2.svg'}
        dividerHeight={'200px'}
      />
      {/*   THIRD SLIDE   */}
      <Slide bgColor={'#010606'} height={'100vh'} anchorID={'third-slide'}>
        <Styled.ThirdSlide id={'third-slide'}>
          <div className="skills-wrapper">
            <SectionHeader
              variant={'small'}
              headerText={'Skills'}
              margin={'0'}
              color={'#2bff88'}
            />
            <PortfolioParagraph
              margin={'0'}
              paragraphText={
                'Languages I speak, Dev & Design Tools that I particularly enjoy'
              }
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            />
            <div className="glass-wrapper">
              <div className="glass-content">
                <SectionHeader
                  variant={'extraSmall'}
                  headerText={'Frontend'}
                  margin={'0'}
                  color={'#2bff88'}
                />
                <ul className={'icon-skills'}>
                  {frontendSkills.map((skill) => (
                    <li key={skill.id}>
                      <SkillIcon
                        iconSrc={skill.iconSrc}
                        text={skill.text}
                        iconSize={skill.iconSize}
                      />
                    </li>
                  ))}
                </ul>

                <ul className="tech-skills">
                  {frontendTechSkills.map((tech) => (
                    <SkillListItem
                      key={tech.id}
                      skillSection={tech.skillSection}
                      skillValue={tech.skillValue}
                    />
                  ))}
                </ul>
              </div>
              <div className="glass-content">
                <SectionHeader
                  variant={'extraSmall'}
                  headerText={'Backend'}
                  margin={'0'}
                  color={'#2bff88'}
                />
                <ul className={'icon-skills'}>
                  {backendSkills.map((skill) => (
                    <li key={skill.id}>
                      <SkillIcon
                        iconSrc={skill.iconSrc}
                        text={skill.text}
                        iconSize={skill.iconSize}
                      />
                    </li>
                  ))}
                </ul>
                <ul className="tech-skills">
                  {backendTechSkills.map((tech) => (
                    <SkillListItem
                      key={tech.id}
                      skillSection={tech.skillSection}
                      skillValue={tech.skillValue}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Styled.ThirdSlide>
      </Slide>
      <WaveDivider
        waveImg={'/assets/portfolio/blob-1.svg'}
        dividerHeight={'200px'}
      />
      {/*   FOURTH SLIDE   */}
      <Slide bgColor={'#4831d4'} height={'100vh'} anchorID={'fourth-slide'}>
        <Styled.FourthSlide>
          <div className="left-column">
            <SectionHeader
              variant={'small'}
              headerText={'Over the past five years'}
              margin={'0'}
              color={'#2bff88'}
            />
            <PortfolioParagraph
              margin={'1rem 0'}
              paragraphText={
                "I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences."
              }
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            />
            <PortfolioParagraph
              margin={'1rem 0'}
              paragraphText={
                "I've created full-stack projects with React & Node.js. I Have excellent knowledge of modern JS stack for building complex user interfaces for the web platform."
              }
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            />
            <PortfolioParagraph
              margin={'1rem 0'}
              paragraphText={
                'Currently, I work at Shopify as a Senior UX Developer and Accessibility advocate crafting thoughtful and inclusive experiences that adhere to web standards for over a million merchants across the world.'
              }
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            />
          </div>

          <div className="right-column">
            <Image
              src={'/assets/portfolio/work-from-home.svg'}
              alt={'Vova is working from home'}
              height={500}
              width={500}
              objectFit={'contain'}
            />
          </div>
        </Styled.FourthSlide>
      </Slide>
      <WaveDivider
        waveImg={'/assets/portfolio/blob-2.svg'}
        dividerHeight={'200px'}
      />
      {/*   FIFTH SLIDE   */}
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
      {/*   SIXTH SLIDE   */}
      <Slide bgColor={'#010606'} height={'100vh'} anchorID={'sixth-slide'}>
        <Styled.SixthSlide>
          <div className="left-column">
            <div className="content-wrapper">
              <SectionHeader
                variant={'small'}
                headerText={'I build & design stuff'}
                margin={'0'}
                color={'#2bff88'}
              />
              <PortfolioParagraph
                margin={'2rem 0 4rem 0'}
                paragraphText={
                  'Open source projects, web apps and experimentals.'
                }
                withDarkColor={false}
                variant={'large'}
                withAnimatedPresence={true}
              />
              <ActionButton
                buttonText={'See my projects'}
                icon={<FiChevronsRight className="action-icon" />}
              />
            </div>
          </div>
          <div className="right-column">
            <div className="content-wrapper">
              <SectionHeader
                variant={'small'}
                headerText={'I write, sometimes'}
                margin={'0'}
                color={'#2bff88'}
              />
              <PortfolioParagraph
                margin={'2rem 0 4rem 0'}
                paragraphText={'About design, frontend dev, learning and life'}
                withDarkColor={false}
                variant={'large'}
                withAnimatedPresence={true}
              />
              <ActionButton
                buttonText={'Read my articles'}
                icon={<FiBookOpen className="action-icon" />}
              />
            </div>
          </div>
        </Styled.SixthSlide>
      </Slide>
    </Styled.Container>
  );
};

export default About;
