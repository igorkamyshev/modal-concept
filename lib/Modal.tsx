import React, { ReactNode } from 'react';

import { ModalState } from './ModalState';

type RenderProp = (state: Pick<ModalState, 'close'>) => ReactNode;

interface OwnProps {
  children?: ReactNode | RenderProp;
}

type Props = OwnProps & ModalState;

export const Modal = ({ isOpen, children, ...props }: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div style={{ border: 'black solid 1px' }}>
      <p>MODAL!</p>

      {typeof children === 'function' ? children(props) : children}
    </div>
  );
};
