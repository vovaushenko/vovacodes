import styled from 'styled-components';

export const Container = styled.section`
  padding: ${({ theme }) => theme.space.md};

  p {
    font-size: 1rem;
  }
`;

export const AuthorCard = styled.article``;

export const AuthorContacts = styled.div`
  display: flex;
  align-items: center;

  gap: 2rem;
`;

export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`;

export const LI = styled.li``;

export const A = styled.a`
  color: ${({ theme }) => theme.portfolio.primaryColor.light};
  display: flex;
  align-items: center;

  .github__icon {
    font-size: 1.25rem;
  }
`;
