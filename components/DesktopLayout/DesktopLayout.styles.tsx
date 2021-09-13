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
`;
