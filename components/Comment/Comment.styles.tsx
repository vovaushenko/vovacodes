import styled from 'styled-components';

export const Container = styled.article`
  padding: ${({ theme }) => theme.space.lg};
  background-image: ${({ theme }) => theme.gradients.lightGrayGradient};
  border-radius: ${({ theme }) => theme.borderRadius};

  min-width: 250px;
  height: 350px;
`;

export const Figure = styled.figure`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Figcaption = styled.figcaption``;
export const Name = styled.h3`
  color: ${({ theme }) => theme.portfolio.primaryColor.light};
  writing-mode: tb-rl;
`;

export const CommentWrapper = styled.div`
  margin-top: 1rem;
`;

export const Text = styled.p`
  font-size: 1.25rem;
`;

export const Date = styled.time`
  color: ${({ theme }) => theme.portfolio.primaryColor.light};
  font-size: 1rem;
  writing-mode: tb-rl;
`;
