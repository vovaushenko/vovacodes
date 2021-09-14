import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.sm};
`;
