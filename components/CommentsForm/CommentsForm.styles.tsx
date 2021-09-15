import styled from 'styled-components';
import { slidInCenter } from '../../design-system/reusableCss';

export const Container = styled.div`
  width: 100%;
  animation: ${slidInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
    width: 95%;
    max-width: 700px;
    margin: 1rem auto;
  }

  button {
    align-self: center;

    :hover {
      color: #fff;
    }
  }
`;

export const TextWrapper = styled.header`
  text-align: center;
`;

export const Message = styled.h1`
  margin-bottom: ${({ theme }) => theme.space.sm};
  color: ${({ theme }) => theme.portfolio.primaryColor.light};
`;
export const Text = styled.h2`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;
