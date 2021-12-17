import { ComponentStory, Meta } from '@storybook/react';

import { StyledWrapper } from '../Stories.styled';
import { Modal as ModalComponent } from './Modal';
import { ModalProps } from './Modal.types';
import { ModalButtonsGroup } from './ModalButtonsGroup';
import { ModalText, ModalTitle } from './ModalElements';
import { useModalState } from './useModalState';

export default {
  component: ModalComponent,
  title: 'Modal',
  args: {
    isOpen: false,
  },
} as Meta;

export const Modal: ComponentStory<React.FC<ModalProps>> = () => {
  const [isOpen, openModal, closeModal] = useModalState();

  return (
    <StyledWrapper>
      <button onClick={openModal}>Open Modal</button>

      <ModalComponent isOpen={isOpen} closeModal={closeModal}>
        <ModalTitle>Modal Title</ModalTitle>
        <ModalText>Modal Text</ModalText>
        <ModalButtonsGroup
          onCancelButtonClick={closeModal}
          onConfirmButtonClick={closeModal}
          cancelContent="Cancel"
          confirmContent="Ok"
        />
      </ModalComponent>
    </StyledWrapper>
  );
};
