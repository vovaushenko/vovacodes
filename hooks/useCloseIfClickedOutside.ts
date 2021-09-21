import React, { useEffect } from 'react';

/**
 * custom hook that monitors the open/close state of a modal. will automatically dispatch action to close modal
 * if user clicked outside of the modal
 * will attach event listener on document to detect whether user clicked outside, if yes - modal will be closed
 *@function useCloseModalIfClickedOutside
 *@param {boolean} isModalOpen - indicates open/close state of a modal
 *@param {RefObject<HTMLDivElement>} modalRef - ref attached to a modal
 *@param {function} closeModalFunction - callback function that closes modal or toggles it visibility state
 *@returns void
 */
export const useCloseModalIfClickedOutside = ({
  isModalOpen,
  modalRef,
  closeModalFunction,
}: {
  isModalOpen: boolean;
  modalRef: React.RefObject<HTMLDivElement>;
  closeModalFunction: () => void;
}): void => {
  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        isModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        closeModalFunction();
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isModalOpen, closeModalFunction, modalRef]);
};
