import { shallow } from 'enzyme';
import React from 'react';
import DevToArticleCard from './DevToArticle';
import * as Styled from './DevToArticle.styles';

import { IDevToArticle } from '../../../types/redux/articles-reducer-types';
import Image from 'next/image';

export const mockDevToArticle: IDevToArticle = {
  id: 1,
  tag_list: ['TOMATO', 'ASPARAGUS'],
  url: 'some.url.com',
  public_reactions_count: 51,
  page_views_count: 52,
  positive_reactions_count: 53,
  comments_count: 54,
  cover_image: 'tomato.png',
  title: 'TOMATOES ARE NUTRITIOUS',
  description: 'ASPARAGUS IS COOL',
  published_at: 'yesterday',
  slug: 'tomatoes_are_good',
};

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<DevToArticleCard {...mockDevToArticle} />);
};

describe('DevToArticle', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render article specified cover', () => {
    const coverImg = wrap.find(Image);

    expect(coverImg.first().prop('alt')).toBe(mockDevToArticle.title);
    expect(coverImg.first().prop('src')).toBe(mockDevToArticle.cover_image);
  });
  it('should render all specified tags', () => {
    const tag = wrap.find(Styled.Tag);

    expect(tag.length).toBe(mockDevToArticle.tag_list.length);
  });
  it('should render all correct article title', () => {
    const articleTitle = wrap.find(Styled.Title);

    expect(articleTitle.text()).toBe(mockDevToArticle.title);
  });
  it('should render correct external article link', () => {
    const extLink = wrap.find(Styled.ExternalLink);

    expect(extLink.prop('href')).toBe(mockDevToArticle.url);
  });
});
