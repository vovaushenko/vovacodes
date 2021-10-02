import { shallow } from 'enzyme';
import React from 'react';
import Comment from './Comment';
import { IComment } from '../../types/redux/comments-reducer-types';
import Image from 'next/image';
import * as Styled from './Comment.styles';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
export const mockComment: IComment = {
  _id: '1',
  author: 'TOMATO',
  comment: 'TOMATOES ARE COOL',
  createdAt: 'YESTERDAY',
  isApproved: true,
};

const setup = () => {
  return shallow(<Comment {...mockComment} />);
};

describe('Comment', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render correct avatar', () => {
    const img = wrap.find(Image);
    expect(img.prop('alt')).toBe(mockComment.author);
  });
  it('should render correct author name', () => {
    const authorName = wrap.find(Styled.Name);
    expect(authorName.text()).toBe(mockComment.author);
  });
  it('should render correct comment', () => {
    const commentText = wrap.find(Styled.Text);
    expect(commentText.text()).toBe(mockComment.comment);
  });
});
