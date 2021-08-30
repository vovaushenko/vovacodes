import React, { FC, useCallback, useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';
import * as Styled from './Window.styles';
import { FiSquare, FiX } from 'react-icons/fi';
import Paragraph from '../Typography/Paragraph/Paragraph';
import Image from 'next/image';
import { generateRandomNumberInRange } from '../../utils/helper-functions';

export interface Props {
  windowName: string;
  windowIcon: string;
  size: { height: number; width: number };
  isOpen: boolean;
  closeWindow: () => void;
}

/**
 *Renders draggable and resizable window
 *@function Window
 *@param {string} windowName - name of window to be displayed in header
 *@param {string} windowIcon - icon path to be rendered into icon in header
 *@param {object} size - initial height and width of window (later will be overwritten by dynamic resizing)
 *@param {isOpen} boolean - specifies whether the window is open
 *@param {function} closeWindow - callback function to close window
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Window: FC<Props> = ({
  size,
  windowName,
  children,
  isOpen,
  closeWindow,
  windowIcon,
}) => {
  const shiftOnX = generateRandomNumberInRange(-400, 100);
  const shiftOnY = generateRandomNumberInRange(-100, 100);
  const [isWindowExpanded, setIsWindowExpanded] = useState(false);
  const [clientWidth, setClientWidth] = useState(800);
  const [clientHeight, setClientHeight] = useState(600);
  const [windowPosition, setWidowPosition] = useState({
    x: (clientWidth + shiftOnX) / 2,
    y: (100 + shiftOnY) / 2,
  });
  const [windowSize, setWindowSize] = useState({
    width: size.width,
    height: size.height,
  });

  const handleCloseWindow = useCallback(() => {
    setIsWindowExpanded(false);
    closeWindow();
  }, [closeWindow]);

  useEffect(() => {
    setClientWidth(document.body.clientWidth);
    setClientHeight(document.body.clientHeight);
  }, []);

  if (isOpen) {
    return (
      <Rnd
        size={{
          width: isWindowExpanded ? clientWidth : windowSize.width,
          height: isWindowExpanded ? clientHeight - 50 : windowSize.height,
        }}
        position={{
          x: isWindowExpanded ? 0 : windowPosition.x,
          y: isWindowExpanded ? 0 : windowPosition.y,
        }}
        onDragStop={(e, d) => {
          setWidowPosition({ x: d.x, y: d.y });
        }}
        onResizeStop={(e, direction, ref) => {
          setWindowSize({
            width: parseInt(ref.style.width),
            height: parseInt(ref.style.height),
          });
        }}
        minWidth="300"
        minHeight="300"
        bounds="parent"
      >
        <Styled.Container>
          <Styled.Navigation>
            <Styled.WindowInfo>
              <Image
                src={windowIcon}
                alt={windowName}
                height={20}
                width={20}
                quality={90}
                objectFit={'contain'}
              />
              <Paragraph margin={'0'}>{windowName}</Paragraph>
            </Styled.WindowInfo>
            <Styled.ButtonWrapper>
              <Styled.NavButton
                variant={'expand'}
                onClick={() => {
                  setIsWindowExpanded((prev) => !prev);
                }}
              >
                <FiSquare className={'icon-expand'} />
              </Styled.NavButton>
              <Styled.NavButton variant={'close'} onClick={handleCloseWindow}>
                <FiX className={'icon-x'} />
              </Styled.NavButton>
            </Styled.ButtonWrapper>
          </Styled.Navigation>
          <Styled.Content>{children}</Styled.Content>
        </Styled.Container>
      </Rnd>
    );
  } else {
    return null;
  }
};

export default Window;
