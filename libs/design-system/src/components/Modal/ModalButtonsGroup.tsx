import { ButtonSecondary } from '../Button/ButtonSecondary/ButtonSecondary';
import { ButtonStandard } from '../Button/ButtonStandard/ButtonStandard';
import { StyledButtonsRow, StyledConfirmButtonWrapper } from './Modal.styled';
import { ModalButtonGroupProps } from './Modal.types';

export function ModalButtonsGroup({
  confirmContent,
  cancelContent,
  onConfirmButtonClick,
  onCancelButtonClick,
  isConfirmLoading,
  isCancelLoading,
  isDisabled,
}: ModalButtonGroupProps) {
  return (
    <StyledButtonsRow>
      <StyledConfirmButtonWrapper>
        <ButtonStandard
          type="submit"
          isLoading={isConfirmLoading}
          disabled={isDisabled}
          onClick={onConfirmButtonClick}
        >
          {confirmContent}
        </ButtonStandard>
      </StyledConfirmButtonWrapper>

      <ButtonSecondary
        type="button"
        isLoading={isCancelLoading}
        disabled={isDisabled}
        onClick={onCancelButtonClick}
      >
        {cancelContent}
      </ButtonSecondary>
    </StyledButtonsRow>
  );
}
