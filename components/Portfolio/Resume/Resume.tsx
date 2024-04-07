import React from 'react';
import * as Styled from './Resume.styles';
import TextList from '../TextList/TextList';

import {
  keyTechSkills,
  otherSkills,
  professionalExperience,
} from './Resume.config';
import {
  FiDownload,
  FiGithub,
  FiGlobe,
  FiMail,
  FiPhoneOutgoing,
} from 'react-icons/fi';
import { SiLinkedin } from 'react-icons/si';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience';
import Link from 'next/link';

/**
 *Renders resume component
 *@function Resume
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Resume = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.ResumeWrapper>
        <Styled.LeftColumn>
          <Styled.ContactInfo>
            <Styled.ContactLink
              href={'https://www.vovacodes.ca/'}
              target="_blank"
              rel="noopener"
            >
              <FiGlobe />
              vovacodes.ca
            </Styled.ContactLink>

            <Styled.ContactLink href="mailto: volodymyr.ushenko@gmail.com">
              <FiMail />
              hello@vovacodes.ca
            </Styled.ContactLink>
            <p>Vancouver, BC, Canada 🇨🇦</p>
          </Styled.ContactInfo>

          <TextList
            variant={'withHeader'}
            textBulletPoints={keyTechSkills}
            headerText={'key technical skills'}
          />

          <TextList
            variant={'withHeader'}
            textBulletPoints={otherSkills}
            headerText={'Other skills'}
          />
        </Styled.LeftColumn>

        <Styled.RightColumn>
          {/*HEADER WITH NAME*/}
          <Styled.SummaryHeader>
            <Styled.Name>
              Vova <span>Ushenko</span>
            </Styled.Name>
            <Styled.Title>
              Senior Full-Stack Software Engineer | Project Lead
            </Styled.Title>

            {/*SOCIAL MEDIA LINKS*/}
            <Styled.SocialLinksWrapper>
              <Styled.SocialMediaLink
                href={'https://www.linkedin.com/in/vovau/'}
                target={'_blank'}
                rel="noopener"
              >
                <SiLinkedin className={'social-media-icon'} />
                Linkedin
              </Styled.SocialMediaLink>
              <Styled.SocialMediaLink
                href={'https://github.com/vovaushenko'}
                target={'_blank'}
                rel="noopener"
              >
                <FiGithub className={'social-media-icon'} />
                GitHub
              </Styled.SocialMediaLink>
              <Styled.SocialMediaLink href="mailto: volodymyr.ushenko@gmail.com">
                <FiMail className={'social-media-icon'} />
                Email
              </Styled.SocialMediaLink>
              <Styled.SocialMediaLink href="tel:+14378861335 ">
                <FiPhoneOutgoing className={'social-media-icon'} />
                +1 604 834 3600
              </Styled.SocialMediaLink>

              <Styled.SocialMediaLink
                href={'/assets/vova-ushenko-cv.pdf'}
                download="vova-ushenko-cv.pdf"
              >
                <FiDownload className={'social-media-icon'} />
                Download CV
              </Styled.SocialMediaLink>
            </Styled.SocialLinksWrapper>

            <Styled.HR />
            {/*SUMMARY*/}
            <Styled.Summary>
              <Styled.ResumeHeader>Summary</Styled.ResumeHeader>
              <PortfolioParagraph
                margin={'0'}
                paragraphText={`Accomplished, highly-qualified, and results-driven Software Engineer
              with over 5 years of proven hands-on experience in designing,
              building, debugging, and implementing performant and scalable
              web applications. Can function well under time-critical conditions
              in fast-paced environments. Equipped with excellent work ethics
              and possesses a strong sense of leadership with a commendable
              record of accomplishment and dependability, combined with
              integrity.`}
                withDarkColor={true}
                variant={'medium'}
                withAnimatedPresence={false}
              />
            </Styled.Summary>
          </Styled.SummaryHeader>

          {/*EXPERIENCE*/}

          <Styled.ResumeHeader>Experience</Styled.ResumeHeader>
          <PortfolioParagraph
            margin={'0'}
            paragraphText={
              'I’ve worked on a handful of large-scale enterprise projects over the past five years, some of which were for the following organizations:'
            }
            withDarkColor={true}
            variant={'medium'}
            withAnimatedPresence={false}
          />

          {professionalExperience.map((experience, id) => (
            <ProfessionalExperience key={id} {...experience} />
          ))}
          {/*PROJECTS*/}
          <Styled.ResumeHeader>Highlighted Projects</Styled.ResumeHeader>

          <Styled.Projects>
            <p>
              Links to some of my projects and work can be found on{' '}
              <Link href={'/portfolio/projects'}>
                vovaushenko.dev/portfolio/projects
              </Link>{' '}
              and details can be provided upon request via a scheduled demo
              call.
            </p>
          </Styled.Projects>

          {/* EDUCATION */}
          <Styled.ResumeHeader>Education</Styled.ResumeHeader>

          <Styled.EducationDetails>
            <h4>
              Master of Computer Engineering
              <span>Advanced Computer Networks</span>
            </h4>
            <Styled.University>
              Chernivtsi National University
            </Styled.University>
          </Styled.EducationDetails>

          <Styled.EducationDetails>
            <h4>
              Bachelor of Computer Engineering
              <span>Computer Networking</span>
            </h4>
            <Styled.University>
              Chernivtsi National University
            </Styled.University>
          </Styled.EducationDetails>
        </Styled.RightColumn>
      </Styled.ResumeWrapper>
    </Styled.Container>
  );
};

export default Resume;
