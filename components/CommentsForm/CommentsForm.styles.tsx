import styled from 'styled-components';
import { slidInCenter } from '../../design-system/reusableCss';

interface Props {
  isCommentPersisted: boolean;
}

export const Container = styled.div<Props>`
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

  :before {
    content: '';
    background: ${({ theme }) => theme.gradients.rainbow};
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(22px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: ${({ isCommentPersisted }) => (isCommentPersisted ? '0.6' : '0')};
    transition: opacity 0.3s ease-in-out;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 200% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

export const TextWrapper = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.md};
`;

export const Message = styled.h1`
  margin-bottom: ${({ theme }) => theme.space.sm};
  color: ${({ theme }) => theme.portfolio.primaryColor.light};
`;
export const Text = styled.h2`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;
