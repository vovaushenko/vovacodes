import React from 'react';
import * as Styled from './DevToArticle.styles';
import { IDevToArticle } from '../../../types/redux/articles-reducer-types';
import Image from 'next/image';
import { FiEye, FiHeart, FiThumbsUp } from 'react-icons/fi';

/**
 *Renders an article with data from dev.to
 *@function DevToArticle
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered DevToArticle component
 */
const DevToArticle = ({
  title,
  cover_image,
  description,
  page_views_count,
  positive_reactions_count,
  public_reactions_count,
  url,
  tag_list,
  id,
}: IDevToArticle): JSX.Element => {
  const tagIconsMap: Record<string, string> = {
    react: '/assets/portfolio/skills/react-original.svg',
    typescript: '/assets/portfolio/skills/typescript-original.svg',
    beginners: '/assets/portfolio/skills/beginners.png',
    webdev: '/assets/portfolio/skills/responsive.png',
    javascript: '/assets/portfolio/skills/javascript-original.svg',
    nextjs: '/assets/portfolio/skills/next-js.svg',
  };

  return (
    <Styled.Container>
      <Styled.ImageColumn>
        <Styled.Figure>
          <Image
            src={cover_image}
            height={250}
            width={600}
            alt={title}
            layout={'responsive'}
          />
          <Styled.Figcaption>
            <Styled.TagWrapper>
              {tag_list.map((tag) => (
                <Styled.Tag key={tag + id}>
                  <Image
                    src={tagIconsMap[tag]}
                    height={35}
                    width={35}
                    objectFit={'contain'}
                    alt={tag}
                  />
                  <p>{tag}</p>
                </Styled.Tag>
              ))}
            </Styled.TagWrapper>
          </Styled.Figcaption>
        </Styled.Figure>
      </Styled.ImageColumn>

      <Styled.Title>{title}</Styled.Title>
      <Styled.TextColumn>
        <Styled.Description>{description}</Styled.Description>
      </Styled.TextColumn>

      <Styled.ExternalLink href={url} target="_blank" rel="noopener" />

      <Styled.Footer>
        <Styled.Stat>
          <FiEye className={'stat__icon'} />
          {page_views_count}
        </Styled.Stat>
        <Styled.Stat>
          <FiHeart className={'stat__icon'} />
          {positive_reactions_count}
        </Styled.Stat>
        <Styled.Stat>
          <FiThumbsUp className={'stat__icon'} />
          {public_reactions_count}
        </Styled.Stat>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default DevToArticle;
