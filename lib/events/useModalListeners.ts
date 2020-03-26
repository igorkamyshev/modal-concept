import { useEffect } from 'react';

import { modalEventsSubscribe } from './modalEventsSubscribe';

export const useModalListeners = (
  name: string,
  isOpen: boolean,
  open: () => void,
  close: () => void,
) => {
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
    [isOpen, name],
  );
};
