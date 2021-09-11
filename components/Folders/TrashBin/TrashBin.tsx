import React from 'react';
import * as Styled from './TrashBin.styles';
import DesktopButton from '../../DesktopButton/DesktopButton';

/**
 *Renders inner content of trash bin, currently hard-coded
 *@function TrashBin
 *@returns {JSX.Element} - Rendered TrashBin component
 */
const TrashBin = (): JSX.Element => {
  return (
    <Styled.Container>
      <DesktopButton
        variant={'desktop'}
        iconSrc={'/assets/icons/Desktop/angularjs-original.svg'}
        iconSize={{ height: 40, width: 40 }}
        text={'Angular'}
        details={'Angular JS'}
        action={() => console.log('click')}
        willOpenWindowWith={null}
      />
    </Styled.Container>
  );
};

export default TrashBin;
