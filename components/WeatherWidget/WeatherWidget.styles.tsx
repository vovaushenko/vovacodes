import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;

  .icon {
    color: ${({ theme }) => theme.primary.text};
    font-size: 0.75rem;
    margin-right: 0.25rem;
  }
`;
export const ImageWrapper = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
`;
export const ForecastWrapper = styled.figcaption`
  width: 70%;
`;
export const Location = styled.div`
  display: flex;
  align-items: center;
`;

export const Forecast = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;
export const Temperature = styled.p`
  font-size: 1.5rem;
  font-weight: 600;

  span {
    margin-left: 0.5rem;
    font-weight: 400;
    font-size: 1rem;
    position: relative;

    ::after {
      content: 'o';
      position: absolute;
      top: 0;
      right: 100%;
      font-size: 0.5rem;
    }
  }
`;

export const ForecastDetails = styled.div``;
export const Humidity = styled.div`
  display: flex;
  align-items: center;
`;
