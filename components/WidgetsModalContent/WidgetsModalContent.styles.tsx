import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`;

export const Header = styled.header`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};

  & article {
    width: 100%;
  }
`;

export const NewsGridWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(10, 300px);
  gap: ${({ theme }) => theme.space.sm};

  .grid-card-1 {
    grid-area: 1 / 1 / 2 / 2;
  }

  .grid-card-2 {
    grid-area: 1 / 2 / 2 / 3;
  }

  .grid-card-3 {
    grid-area: 2 / 1 / 3 / 3;
  }

  .grid-card-4 {
    grid-area: 3 / 1 / 4 / 2;
  }

  .grid-card-5 {
    grid-area: 3 / 2 / 4 / 3;
  }

  .grid-card-6 {
    grid-area: 4 / 1 / 5 / 3;
  }

  .grid-card-7 {
    grid-area: 5 / 1 / 6 / 2;
  }

  .grid-card-8 {
    grid-area: 5 / 2 / 6 / 3;
  }

  .grid-card-9 {
    grid-area: 6 / 1 / 7 / 3;
  }

  .grid-card-10 {
    grid-area: 7 / 1 / 8 / 2;
  }

  .grid-card-11 {
    grid-area: 7 / 2 / 8 / 3;
  }

  .grid-card-12 {
    grid-area: 8 / 1 / 9 / 3;
  }

  .grid-card-13 {
    grid-area: 9 / 1 / 10 / 2;
  }

  .grid-card-14 {
    grid-area: 9 / 2 / 10 / 3;
  }

  .grid-card-15 {
    grid-area: 10 / 1 / 11 / 3;
  }
`;
