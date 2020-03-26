import {
  OPEN_MODAL_EVENT,
  CLOSE_MODAL_EVENT,
  INIT_MODAL_EVENT,
  OpenModalEvent,
  CloseModalEvent,
  InitModelEvent,
} from './events';

interface Listeners {
  onOpen?: (event: OpenModalEvent) => void;
  onClose?: (event: CloseModalEvent) => void;
  onInit?: (event: InitModelEvent) => void;
}

export const modalEventsSubscribe = (listeners: Listeners) => {
  if (listeners.onOpen) {
    document.addEventListener(
      OPEN_MODAL_EVENT,
      listeners.onOpen as EventListener,
    );
  }

  if (listeners.onClose) {
    document.addEventListener(
      CLOSE_MODAL_EVENT,
      listeners.onClose as EventListener,
    );
  }

  if (listeners.onInit) {
    document.addEventListener(
      INIT_MODAL_EVENT,
      listeners.onInit as EventListener,
    );
  }

  return () => {
    if (listeners.onOpen) {
      document.removeEventListener(
        OPEN_MODAL_EVENT,
        listeners.onOpen as EventListener,
      );
    }

    if (listeners.onClose) {
      document.removeEventListener(
        CLOSE_MODAL_EVENT,
        listeners.onClose as EventListener,
      );
    }

    if (listeners.onInit) {
      document.removeEventListener(
        INIT_MODAL_EVENT,
        listeners.onInit as EventListener,
      );
    }
  };
};
