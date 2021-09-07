import styled from 'styled-components';

export const BTN = styled.button`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  transition: color 0.5s, transform 0.3s, background-color 0.3s;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem 3.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.portfolio.primaryColor.light};
  border: none;
  overflow: hidden;
  box-shadow: none;

  &:active {
    transform: translateX(5px);
  }

  &::after,
  &::before {
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  &:hover {
    color: ${({ theme }) => theme.portfolio.bgColor};
    //  show icon
    span {
      visibility: visible;

      .action-icon {
        transform: translateX(8px);
      }
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.portfolio.primaryColor.light};
    transition: opacity 0.3s, border 0.3s;
  }

  &:hover::before {
    opacity: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 350px;
    height: 200px;
    background-image: linear-gradient(
      45deg,
      #01bf71 0%,
      #2bd2ff 52%,
      #2bff88 90%
    );
    border-color: transparent;
    border-radius: 50%;
    transform: translate(-10px, -70px) scale(0.1);
    opacity: 0;
    z-index: -1;

    transition: transform 0.5s, opacity 0.5s, background-color 0.5s;
  }

  &:hover::after {
    opacity: 1;
    transform-origin: 100px 100px;
    transform: scale(1) translate(-50px, -70px);
  }

  // Wrapped Icon
  span {
    position: absolute;
    top: 1.25rem;
    right: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.25rem;
    visibility: hidden;

    .action-icon {
      font-size: 20px;
      transition: transform 0.3s;
    }
  }

  @media ${({ theme }) => theme.media.phone} {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;
