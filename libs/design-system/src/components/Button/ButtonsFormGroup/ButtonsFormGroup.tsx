import { IconDoubleChevronLeft } from '../../../icons/Icons';
import { ButtonSecondary } from '../ButtonSecondary/ButtonSecondary';
import { ButtonStandard } from '../ButtonStandard/ButtonStandard';
import {
  StyledBackButtonWrapper,
  StyledPrimaryButtonWrapper,
  StyledWrapper,
} from './ButtonsFormGroup.styled';

interface Props {
  primaryButtonContent: React.ReactNode;
  onPrimaryButtonClick: () => void;
  onSecondaryButtonClick: () => void;
}

export function ButtonsFormGroup({
  primaryButtonContent,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}: Props) {
  return (
    <StyledWrapper>
      <StyledBackButtonWrapper>
        <ButtonSecondary type="button" onClick={onSecondaryButtonClick}>
          <IconDoubleChevronLeft />
        </ButtonSecondary>
      </StyledBackButtonWrapper>

      <StyledPrimaryButtonWrapper>
        <ButtonStandard type="button" onClick={onPrimaryButtonClick}>
          {primaryButtonContent}
        </ButtonStandard>
      </StyledPrimaryButtonWrapper>
    </StyledWrapper>
  );
}
