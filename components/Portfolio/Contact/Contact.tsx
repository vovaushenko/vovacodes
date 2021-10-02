import React from 'react';
import * as Styled from './Contact.styles';
import Slide from '../Slide/Slide';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import ScrollHint from '../ScrollHint/ScrollHint';
import { useContactConfig } from './Contact.config';
import SocialMediaContact from '../SocialMediaContact/SocialMediaContact';
import ContactForm from '../ContactForm/ContactForm';
import WaveDivider from '../WaveDivider/WaveDivider';
import Navbar from '../Navbar/Navbar';
import WithSparkles from '../WithSparkles/WithSparkles';

/**
 *Renders contact screen @ portfolio/contact
 *@function Contact
 *@returns {JSX.Element} - Rendered Contact component
 */
const Contact = (): JSX.Element => {
  const { myContacts } = useContactConfig();

  return (
    <Styled.Container>
      {/* Navigation - positioned absolutely */}
      <Navbar isLogoExpanded={true} />

      {/* Slide # 1*/}
      <Slide bgColor={'#010606'} height={`100vh`} anchorID={'first-slide'}>
        <Styled.FirstSlide>
          <SectionHeader variant={'large'} margin={'0'} color={'#fff'}>
            Let`s build something{' '}
            <WithSparkles color={'yellow'}>cool!</WithSparkles>
          </SectionHeader>
          <ScrollHint />
        </Styled.FirstSlide>
      </Slide>
      <WaveDivider
        waveImg={'/assets/portfolio/blob-1.svg'}
        dividerHeight={'150px'}
      />
      {/* Slide # 2*/}
      <Slide bgColor={'#4831d4'} height={`100vh`} anchorID={'first-slide'}>
        <Styled.SecondSlide>
          <Styled.ColumnWrapper>
            <Styled.LeftColumn>
              <SectionHeader
                variant={'small'}
                headerText={`Send me a message!`}
                margin={'0'}
                color={'#2bff88'}
              />
              <PortfolioParagraph
                margin={'0'}
                paragraphText={
                  'Got a question or proposal, or just want to say hello? Go ahead.'
                }
                withDarkColor={false}
                variant={'large'}
                withAnimatedPresence={true}
              />
              <ContactForm />
            </Styled.LeftColumn>

            <Styled.RightColumn>
              <Styled.SocialContactsWrapper>
                {myContacts.map((contact) => (
                  <li key={contact.id}>
                    <SocialMediaContact
                      icon={contact.icon}
                      href={contact.href}
                    />
                  </li>
                ))}
              </Styled.SocialContactsWrapper>
              <SectionHeader
                variant={'small'}
                headerText={`Connect`}
                margin={'0'}
                color={'#2bff88'}
              />
            </Styled.RightColumn>
          </Styled.ColumnWrapper>
        </Styled.SecondSlide>
      </Slide>
    </Styled.Container>
  );
};

export default Contact;
