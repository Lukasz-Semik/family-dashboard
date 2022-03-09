import { forwardRef } from 'react';

import { PopperMobileHeader } from '../../../PopperMobileHeader/PopperMobileHeader';
import { StyledWrapper } from '../DatePickerInputExact.styled';
import {
  StyledContentWrapper,
  StyledModalMobileDropdown,
  StyledPickerInputExactPopper,
} from './PickerWrapper.styled';

interface Props {
  menuAttributes: Record<string, unknown>;
  isOpen: boolean;
  children: React.ReactNode;
  closePicker: () => void;
  isMobile: boolean;
  label: React.ReactNode;
}

export const PickerWrapper = forwardRef<HTMLUListElement, Props>(
  ({ closePicker, menuAttributes, isOpen, children, label, isMobile }, ref) => {
    if (isMobile) {
      return (
        <StyledModalMobileDropdown
          shouldCloseOnOverlayClick={false}
          isOpen={isOpen}
          overlayClassName="modal-basic-overlay"
        >
          <StyledWrapper>
            <PopperMobileHeader close={closePicker} label={label} />
            <StyledContentWrapper>{children}</StyledContentWrapper>
          </StyledWrapper>
        </StyledModalMobileDropdown>
      );
    }

    return (
      <StyledPickerInputExactPopper
        ref={ref}
        {...menuAttributes}
        isOpen={isOpen}
      >
        {children}
      </StyledPickerInputExactPopper>
    );
  }
);
