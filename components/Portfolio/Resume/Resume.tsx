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
              volodymyr.ushenko@gmail.com
            </Styled.ContactLink>

            <Styled.ContactLink href="tel:+16048343600">
              <FiPhoneOutgoing />
              604-834-3600
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
              Vova <span>Ushenko</span>, PhD
            </Styled.Name>
            <Styled.Title>Principal Software Engineer</Styled.Title>

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
                href={'/assets/vushenko2026.pdf'}
                download="vushenko2026.pdf"
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
                paragraphText={`Innovative Principal Software Engineer with deep expertise in AI-integrated enterprise solutions, cloud architecture, and scalable web systems. Holder of multiple patents and Oracle Stand Out awards, with a proven record of transforming Oracle's leading Configure, Price, Quote (CPQ) platform through AI agents, natural-language configuration, and next-gen 3D visualization. Trusted for technical leadership, cross-team mentoring, and driving innovations that accelerate business impact and adoption.`}
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
              "I've led and contributed to enterprise SaaS, AI, CRM, CPQ, and research software initiatives across Oracle and academia."
            }
            withDarkColor={true}
            variant={'medium'}
            withAnimatedPresence={false}
          />

          {professionalExperience.map((experience, id) => (
            <ProfessionalExperience key={id} {...experience} />
          ))}
          {/*PROJECTS*/}
          <Styled.ResumeHeader>Key Product Highlights</Styled.ResumeHeader>

          <Styled.Projects>
            <p>
              <strong>
                Oracle Configure, Price, Quote (CPQ) - Quote Designer / Runtime:
              </strong>{' '}
              Developed and patented a dynamic configuration and quoting engine,
              enabling rapid creation of complex quotes for top enterprise
              clients.
            </p>
            <p>
              <strong>Oracle CPQ - AI-Powered 3D Product Configurator:</strong>{' '}
              Built a browser-based 3D visualizer integrated with Oracle CPQ,
              leveraging AI agents to automate interactive product configuration
              and visualization.
            </p>
            <p>
              <strong>Migration Tools for Legacy CPQ:</strong> Engineered
              one-click migration tools for customers transitioning from legacy
              CPQ systems, reducing implementation time and accelerating
              adoption.
            </p>
            <p>
              <strong>Oracle Sales Cloud:</strong> Played a key role in the
              reimplementation of Oracle Sales Cloud across web, mobile, Zoom,
              and Outlook embedded environments.
            </p>
            <p>
              More selected work can be found on{' '}
              <Link href={'/portfolio/projects'}>vovacodes.ca/projects</Link>.
            </p>
          </Styled.Projects>

          <Styled.ResumeHeader>Awards and Patents</Styled.ResumeHeader>
          <Styled.Projects>
            <p>
              <strong>Oracle CX - Outstanding Contribution 2024:</strong>{' '}
              Recognized for leading the successful launch of the CPQ
              project&apos;s quoting flow for Oracle&apos;s largest customers.{' '}
              <a
                href="/assets/portfolio/oracle-award.pdf"
                target="_blank"
                rel="noopener"
              >
                Award
              </a>
            </p>
            <p>
              <strong>Oracle CX - Stand Outs 2025:</strong> Honored for
              exceptional contributions and consistent high-impact performance
              across Oracle CX initiatives.
            </p>
            <p>
              <strong>2025 US Patent:</strong> Method and System to Define a
              Real-time Customization Model for Configuring an Enterprise Web
              Application.
            </p>
            <p>
              <strong>2026 Pending Patent:</strong> Agentic Interface System for
              Managing Enterprise Configurations with Dynamic Transition and
              Updates to Non-Agentic Operations.
            </p>
          </Styled.Projects>

          {/* EDUCATION */}
          <Styled.ResumeHeader>Education</Styled.ResumeHeader>

          <Styled.EducationDetails>
            <h4>
              PhD
              <span>Bioinformatics | Biomedical Engineering</span>
            </h4>
            <Styled.University>
              Taras Shevchenko National University of Kyiv
            </Styled.University>
          </Styled.EducationDetails>

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
