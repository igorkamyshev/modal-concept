import {
  OPEN_MODAL_EVENT,
  CLOSE_MODAL_EVENT,
  INIT_MODAL_EVENT,
  OpenEventDetail,
  CloseEventDetail,
  InitEventDetail,
} from './events';

export const emitOpenModal = (name: string) => {
  const event = new CustomEvent<OpenEventDetail>(OPEN_MODAL_EVENT, {
    detail: { name },
  });

  document.dispatchEvent(event);
};

export const emitCloseModal = (name: string) => {
  const event = new CustomEvent<CloseEventDetail>(CLOSE_MODAL_EVENT, {
    detail: { name },
  });

  document.dispatchEvent(event);
};

export const emitInitModal = (name: string) => {
  const event = new CustomEvent<InitEventDetail>(INIT_MODAL_EVENT, {
    detail: { name },
  });

  document.dispatchEvent(event);
};
