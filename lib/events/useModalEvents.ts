import { useEffect, useRef } from 'react';

import { emitCloseModal, emitInitModal, emitOpenModal } from './emitters';

export const useModalEvents = (name: string, isOpen: boolean) => {
  const initedRef = useRef(false);

  useEffect(() => {
    if (isOpen) {
      emitOpenModal(name);
      return;
    }

    if (initedRef.current) {
      emitCloseModal(name);
      return;
    }

    initedRef.current = true;
    emitInitModal(name);
  }, [isOpen]);
};
