import React from 'react';
import * as Styled from './TextList.styles';
import { FiExternalLink } from 'react-icons/fi';

export type ListProps =
  | {
      variant: 'simple';
      textBulletPoints: { text: string; iconUrl: string; url?: string }[];
    }
  | {
      variant: 'withHeader';
      headerText: string;
      textBulletPoints: { text: string; iconUrl: string; url?: string }[];
    };

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
        <Styled.LI key={id} iconUrl={textBulletPoint.iconUrl}>
          <p>{textBulletPoint.text}</p>
          {textBulletPoint.url && (
            <Styled.ExternalLink
              href={textBulletPoint.url}
              target="_blank"
              rel="noopener"
            >
              <FiExternalLink />
            </Styled.ExternalLink>
          )}
        </Styled.LI>
      ))}
    </Styled.UL>
  );
};

export default TextList;
