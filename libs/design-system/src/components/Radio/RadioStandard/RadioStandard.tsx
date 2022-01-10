import { RadioProps } from '../Radio.types';
import {
  StyledCheckedIndicator,
  StyledLabel,
  StyledRadioInput,
  StyledRadioInputWrapper,
} from './RadioStandard.styled';

export function RadioStandard({ label, ...restProps }: RadioProps) {
  return (
    <StyledLabel>
      <StyledRadioInputWrapper>
        <StyledRadioInput type="radio" {...restProps} />
        <StyledCheckedIndicator isVisible={Boolean(restProps.checked)} />
      </StyledRadioInputWrapper>
      {label}
    </StyledLabel>
  );
}
