import React, { useCallback, useEffect } from 'react';
import * as Styled from './Likes.styles';
import ActionButton from '../Portfolio/ActionButton/ActionButton';
import { FiThumbsUp } from 'react-icons/fi';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

/**
 *Renders likes counter
 *@function Likes
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Likes = (): JSX.Element => {
  const { likesCount, isLoading, isLikePersisted } = useTypedSelector(
    (state) => state.likes
  );
  const { getAllLikes, postLike, clearLikeState } = useActions();

  const digits = String(likesCount).split('');

  useEffect(() => {
    getAllLikes();
  }, [isLikePersisted]);

  const handlePostLike = useCallback(() => {
    postLike();
    clearLikeState();
  }, [postLike, clearLikeState]);

  return (
    <Styled.Container>
      <Styled.Message>
        {isLikePersisted ? '🎉 Thank you 🎉' : `👋 Hey! Let's count us.`}
      </Styled.Message>
      <Styled.LikeCounter isLikePersisted={isLikePersisted}>
        👍
        {digits.map((digit, id) => (
          <Styled.Digit key={id * Number(digit)}>{digit}</Styled.Digit>
        ))}
      </Styled.LikeCounter>

      <ActionButton
        buttonText={'CONTRIBUTE'}
        icon={<FiThumbsUp className={'action-icon'} />}
        onClick={handlePostLike}
        isLoading={isLoading}
      />
    </Styled.Container>
  );
};

export default Likes;
