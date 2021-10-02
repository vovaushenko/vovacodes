import React from 'react';
import * as Styled from './Comment.styles';
import { IComment } from '../../types/redux/comments-reducer-types';
import Image from 'next/image';

/**
 *@function Comment
 *@param {string} author - author name
 *@param {string} comment - comment text itself
 *@param {string} createdAt - timestamp where comment was written
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Comment = ({ comment, createdAt, author }: IComment): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.Figure>
        <Styled.Date>
          {new Date(createdAt).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Styled.Date>

        <Image
          src={`/assets/avatars/${Math.floor(Math.random() * 5 + 1)}.png`}
          width={150}
          height={150}
          objectFit={'contain'}
          alt={author}
        />
        <Styled.Figcaption>
          <Styled.Name>{author}</Styled.Name>
        </Styled.Figcaption>
      </Styled.Figure>

      <Styled.CommentWrapper>
        <Styled.Text>{comment}</Styled.Text>
      </Styled.CommentWrapper>
    </Styled.Container>
  );
};
export default Comment;
