import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.portfolio.bgColor};
  font-family: 'Poppins', sans-serif;
`;
