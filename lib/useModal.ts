import { useState, useEffect } from 'react';

import { useBrowserHistory } from './useBrowserHistory';
import { useModalEvents } from './events/useModalEvents';
import { modalEventsSubscribe } from './events/modalEventsSubscribe';

export const useModal = (name: string) => {
  const [isOpen, setIsOpen] = useState(false);

  const { handleForward: open, handleBack: close } = useBrowserHistory(
    name,
    isOpen,
    () => setIsOpen(false),
    () => setIsOpen(true),
  );

  useModalEvents(name, isOpen);

  useEffect(
    () =>
      modalEventsSubscribe({
        onOpen: event => {
          if (event.detail.name === name && !isOpen) {
            open();
          }
        },
        onClose: event => {
          if (event.detail.name === name && isOpen) {
            close();
          }
        },
      }),
    [isOpen],
  );

  return {
    open,
    close,
    isOpen,
  };
};
