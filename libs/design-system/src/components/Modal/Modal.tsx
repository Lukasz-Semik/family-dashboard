import { ButtonCloseAnimated } from '../Button/ButtonCloseAnimated/ButtonCloseAnimated';
import { StyledCloseButtonWrapper, StyledWrapper } from '../Modal/Modal.styled';
import { ModalProps } from './Modal.types';

export const Modal = ({
  isOpen,
  closeModal,
  children,
  hasCloseButton = true,
  shouldCloseOnEsc = true,
  shouldCloseOnOverlayClick = true,
}: ModalProps) => {
  return (
    <StyledWrapper
      overlayClassName="modal-basic-overlay"
      isOpen={isOpen}
      shouldCloseOnEsc={shouldCloseOnEsc}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      onRequestClose={closeModal}
    >
      {hasCloseButton && (
        <StyledCloseButtonWrapper>
          <ButtonCloseAnimated onClick={closeModal} />
        </StyledCloseButtonWrapper>
      )}
      {children}
    </StyledWrapper>
  );
};
