import styled from 'styled-components';

export const LI = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SkillSection = styled.h4`
  color: ${({ theme }) => theme.portfolio.primaryColor.light};
`;
