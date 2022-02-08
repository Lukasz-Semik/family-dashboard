import React from 'react';
import Modal from 'react-native-modal';

import { ModalProps } from '../Modal.types';

export function ModalStandard({ children, ...restProps }: ModalProps) {
  return (
    <Modal
      animationIn="zoomIn"
      animationOut="zoomOut"
      animationInTiming={500}
      animationOutTiming={500}
      {...restProps}
    >
      {children}
    </Modal>
  );
}
