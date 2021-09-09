import React from 'react';
import * as Styled from './Recommended.styles';
import { useRecommendedConfig } from './Recommended.config';
import DesktopButton from '../DesktopButton/DesktopButton';

/**
 *Renders section with recommended apps and recently opened files
 *@function Recommended
 *@returns {JSX.Element} - Rendered Recommended component
 */
const Recommended = (): JSX.Element => {
  const { recommendedFiles } = useRecommendedConfig();
  return (
    <Styled.Container>
      {recommendedFiles.map((file) => (
        <DesktopButton
          key={file.id}
          variant={'recommendedApp'}
          iconSrc={file.icon}
          iconSize={file.iconSize}
          text={file.fileName}
          details={file.details}
          action={file.action}
          willOpenWindowWith={file.willOpenWindowWith}
        />
      ))}
    </Styled.Container>
  );
};
export default Recommended;
