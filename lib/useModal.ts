import { useState } from 'react';

import { useBrowserHistory } from './useBrowserHistory';
import { useModalEmitters } from './events/useModalEmitters';
import { useModalListeners } from './events/useModalListeners';

export const useModal = (name: string) => {
  const [isOpen, setIsOpen] = useState(false);

  const { handleForward: open, handleBack: close } = useBrowserHistory(
    name,
    isOpen,
    () => setIsOpen(false),
    () => setIsOpen(true),
  );

  useModalEmitters(name, isOpen);
  useModalListeners(name, isOpen, open, close);

  return {
    open,
    close,
    isOpen,
  };
};
