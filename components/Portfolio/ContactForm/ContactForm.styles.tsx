import styled from 'styled-components';
import { slidInCenter } from '../../../styles/reusableCss';

export const Container = styled.section`
  width: 100%;
  animation: ${slidInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  form {
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
    width: 95%;
    max-width: 700px;
    margin: 3rem auto;
  }

  button {
    align-self: center;

    :hover {
      color: #fff;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`;
