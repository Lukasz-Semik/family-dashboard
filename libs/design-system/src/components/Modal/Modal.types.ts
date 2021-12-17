export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  hasCloseButton?: boolean;
  children: React.ReactNode;
}

export interface ModalButtonGroupProps {
  confirmContent: React.ReactNode;
  cancelContent: React.ReactNode;
  onConfirmButtonClick: () => void;
  onCancelButtonClick: () => void;
  isConfirmLoading?: boolean;
  isCancelLoading?: boolean;
  isDisabled?: boolean;
}
