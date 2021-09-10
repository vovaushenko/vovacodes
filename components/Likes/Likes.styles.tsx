import styled from 'styled-components';
import { likeKeyframe } from '../../styles/reusableCss';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 2rem;
`;

export const LikeCounter = styled.div`
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  background-color: ${({ theme }) => theme.systemTrayBackground};
  padding: 2rem 4rem;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Digit = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  background-image: linear-gradient(135deg, #5efce8 10%, #736efe 100%);
  color: ${({ theme }) => theme.primary.text};
  padding: 1rem;
  width: 7rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  animation: ${likeKeyframe} 0.6s ease-in-out;
`;

export const Message = styled.h2`
  font-size: 4rem;
  color: ${({ theme }) => theme.primary.text};
`;
