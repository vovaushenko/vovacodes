import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  gap: 0.75rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const SlidersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
