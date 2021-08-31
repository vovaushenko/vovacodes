import { useEffect, useState } from 'react';

/**
 * Custom hook to detect whether the mouse is hovering an element.
 *@function useHover
 *@param {React.RefObject<HTMLElement>} ref - ref to React.Node or HTML element
 *@returns {boolean} isHovering - the hook returns a ref and a boolean value indicating whether the element with that ref is currently being hovered
 */

export default function useHover(ref: React.RefObject<HTMLElement>): boolean {
  const [isHovering, setIsHovering] = useState(false);

  const on = () => setIsHovering(true);
  const off = () => setIsHovering(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const node = ref.current;

    node.addEventListener('mouseenter', on);
    node.addEventListener('mousemove', on);
    node.addEventListener('mouseleave', off);

    return function () {
      node.removeEventListener('mouseenter', on);
      node.removeEventListener('mousemove', on);
      node.removeEventListener('mouseleave', off);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isHovering;
}
