import styled from 'styled-components';

interface Props {
  isInNightLightMode: boolean;
  screenBrightness: string;
}

export const Container = styled.section<Props>`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  /**
  * In the below filter we apply "brightness control" feature and "night light" feature
  * By turning on "night light" sepia filter will be added, and brightness is directly controlled by "screenBrightness"
  */
  filter: ${({ screenBrightness, isInNightLightMode }) =>
    `brightness(${screenBrightness}%) ${
      isInNightLightMode ? `sepia(70%)` : ''
    }`};

  animation: slide-in-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes slide-in-top {
    0% {
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
