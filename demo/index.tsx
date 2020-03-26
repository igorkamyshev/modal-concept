import { render } from 'react-dom';
import React from 'react';

import {
  useModal,
  Modal,
  modalEventsSubscribe,
  emitOpenModal,
  emitCloseModal,
} from '&lib/index';

const App = () => {
  const modal1 = useModal('MY_NAME');

  const modal2 = useModal('MY_NAME_2');

  return (
    <div>
      <h1>Modal Concept</h1>

      <p>modal1 will be open by external forces</p>
      <button onClick={modal1.open}>open modal1</button>
      <button onClick={modal1.close}>close modal1</button>

      <Modal {...modal1}>PRIVET</Modal>

      <button onClick={modal2.open}>open modal2</button>
      <button onClick={modal2.close}>close modal2</button>

      <Modal {...modal2}>
        {({ close }) => (
          <div>
            <p>MODAL PRIVET 2</p>
            <button onClick={close}>self close =)</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

const container = document.getElementById('app');

if (container) {
  render(<App />, container);
}

// Can be used for emit redux-actions/mobx-actions/what-ever-actions
modalEventsSubscribe({
  onOpen: event => {
    console.log(`Subscriber: Modal ${event.detail.name} open`);
  },
  onClose: event => {
    console.log(`Subscriber: Modal ${event.detail.name} close`);
  },
  onInit: event => {
    console.log(`Subscriber: Modal ${event.detail.name} init`);
  },
});

// Can be used for open/close modals from redux-sagas/redux-thunks/mobx-actions/what-ever-effects
setTimeout(() => {
  emitOpenModal('MY_NAME');

  setTimeout(() => {
    emitCloseModal('MY_NAME');
  }, 1000);
}, 1000);
