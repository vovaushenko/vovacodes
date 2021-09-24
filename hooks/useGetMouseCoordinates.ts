import { useEffect, useState } from 'react';

interface MouseCoordinates {
  x: number;
  y: number;
}

/**
 * Custom hook used to get current coordinates of mouse cursor on screen
 *@function useGetMouseCoordinates
 *@returns {MouseCoordinates} {x:number, y:number} - returns clientX and clientY coords
 */

export const useGetMouseCoordinates = (): MouseCoordinates => {
  const [mouseCoords, setMouseCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      setMouseCoords({ x: e.clientX, y: e.clientY });
    });

    return document.removeEventListener('contextmenu', (e) => {
      setMouseCoords({ x: e.clientX, y: e.clientY });
    });
  }, []);

  return mouseCoords;
};
