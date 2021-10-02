import React, { useEffect } from 'react';
import * as Styled from './CommentsList.styles';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Comment from '../Comment/Comment';
import Ticker from 'react-ticker';
import WindowLoaderSkeleton from '../WindowLoaderSkeleton/WindowLoaderSkeleton';

/**
 *Renders list of all approved comments
 *@function CommentsList
 *@returns {JSX.Element} - Rendered CommentsList component
 */
const CommentsList = (): JSX.Element => {
  const { loadAllApprovedComments } = useActions();
  const { comments, isLoading } = useTypedSelector((state) => state.comments);
  useEffect(() => {
    if (!comments.length) loadAllApprovedComments();
  }, []);

  return (
    <Styled.Container>
      {isLoading ? (
        <WindowLoaderSkeleton />
      ) : (
        <Ticker direction="toRight">
          {() => (
            <Styled.UL>
              {comments.map((comment) => (
                <Styled.LI key={comment._id}>
                  <Comment {...comment} />
                </Styled.LI>
              ))}
            </Styled.UL>
          )}
        </Ticker>
      )}
    </Styled.Container>
  );
};

export default CommentsList;
