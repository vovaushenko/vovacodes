import React from 'react';
import * as Styled from './TextList.styles';

export type ListProps =
  | { variant: 'simple'; textBulletPoints: string[] }
  | { variant: 'withHeader'; headerText: string; textBulletPoints: string[] };

/**
 *Renders re-usable text list to render skills list or responsibilities list in resume
 *@function TextList
 *@param {ListProps} props - component props
 *@returns {JSX.Element} - Rendered TextList component
 */
const TextList = (props: ListProps): JSX.Element => {
  return (
    <Styled.UL>
      {props.variant === 'withHeader' && (
        <Styled.ListHeader>{props.headerText}</Styled.ListHeader>
      )}
      {props.textBulletPoints.map((textBulletPoint, id) => (
        <Styled.LI key={id}>{textBulletPoint}</Styled.LI>
      ))}
    </Styled.UL>
  );
};

export default TextList;
