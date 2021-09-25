import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.space.lg};
`;

export const Figure = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  border-bottom: 2px solid ${({ theme }) => theme.colors.gray.invisible};
`;
export const Figcaption = styled.figcaption`
  h1 {
    font-size: 2.5rem;
  }
`;
export const Header = styled.header``;
export const InfoWrapper = styled.article`
  > p {
    font-weight: bold;
  }
`;

export const A = styled.a`
  margin-left: 0.25rem;
  display: inline;
  color: ${({ theme }) => theme.portfolio.primaryColor.light};
`;
