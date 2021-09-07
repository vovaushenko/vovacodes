import styled from 'styled-components';

export const LI = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media ${({ theme }) => theme.media.phone} {
    p {
      font-size: 0.75rem;
      width: 50%;
    }

    h4 {
      font-size: 0.75rem;
    }
  }
`;

export const SkillSection = styled.h4`
  color: ${({ theme }) => theme.portfolio.primaryColor.light};
`;
