import styled from 'styled-components';

export const Container = styled.article`
  padding: ${({ theme }) => theme.space.lg};
  background-image: ${({ theme }) => theme.gradients.lightGrayGradient};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Figure = styled.figure`
  display: flex;
  flex-wrap: wrap;
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
  writing-mode: tb-rl;
  font-size: 1rem;
`;
