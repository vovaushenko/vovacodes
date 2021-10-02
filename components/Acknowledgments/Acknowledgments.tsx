import React from 'react';
import * as Styled from './Acknowledgments.styles';
import Paragraph from '../Typography/Paragraph/Paragraph';
import { authors } from './Acknowledgments.config';
import { FiGithub } from 'react-icons/fi';
import WithSparkles from '../Portfolio/WithSparkles/WithSparkles';

/**
 *Renders Acknowledgments component with the list of people that heavily inspired this project
 *@function Acknowledgments
 *@returns {JSX.Element} - Rendered Acknowledgments component
 */
const Acknowledgments = (): JSX.Element => {
  return (
    <Styled.Container>
      <Paragraph margin={'1rem 0'}>
        I would like to express my special thanks of gratitude to the people
        whose projects played a crucial role in the construction of this
        project. They have been a catalyst for creative progress and heavily
        inspired design choices that have been made.
      </Paragraph>

      <Paragraph margin={'1rem 0'}>
        Without any order of preference, I would love to give thanks to:
      </Paragraph>

      <Styled.UL>
        {authors.map((author) => (
          <Styled.LI key={author.id}>
            <Styled.AuthorCard>
              <Styled.AuthorContacts>
                <Styled.A href={author.url} target="_blank" rel="noopener">
                  <WithSparkles color={'yellow'}>{author.name}</WithSparkles>
                </Styled.A>

                {author.github && (
                  <Styled.A href={author.github} target="_blank" rel="noopener">
                    <FiGithub className={'github__icon'} />
                  </Styled.A>
                )}
              </Styled.AuthorContacts>
              <Paragraph margin={'1rem 0'}>{author.acknowledgement}</Paragraph>
            </Styled.AuthorCard>
          </Styled.LI>
        ))}
      </Styled.UL>
    </Styled.Container>
  );
};

export default Acknowledgments;
