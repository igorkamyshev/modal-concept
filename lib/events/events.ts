export const OPEN_MODAL_EVENT = '@namespace/modal/open';
export const CLOSE_MODAL_EVENT = '@namespace/modal/close';
export const INIT_MODAL_EVENT = '@namespace/modal/init';

export interface OpenEventDetail {
  name: string;
}

export interface CloseEventDetail {
  name: string;
}

export interface InitEventDetail {
  name: string;
}

export type OpenModalEvent = CustomEvent<OpenEventDetail>;
export type CloseModalEvent = CustomEvent<CloseEventDetail>;
export type InitModelEvent = CustomEvent<InitEventDetail>;
