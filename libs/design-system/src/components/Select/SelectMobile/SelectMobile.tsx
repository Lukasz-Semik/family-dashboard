import { useState } from 'react';

import { IconCheckmark, IconChevron } from '../../../icons/Icons';
import { dsStyles } from '../../../utils/styles';
import { ButtonCloseAnimated } from '../../Button/ButtonCloseAnimated/ButtonCloseAnimated';
import {
  StyledLabelContent,
  StyledListItem,
  StyledTrigger,
} from '../Select.styled';
import { SelectItemBase, SelectProps } from '../Select.types';
import {
  StyledHeader,
  StyledLine,
  StyledList,
  StyledModalMobileDropdown,
  StyledTitle,
} from './SelectMobile.styled';

export function SelectMobile<T extends SelectItemBase>({
  selectedItem,
  hasError,
  isDisabled,
  label,
  triggerPlaceholder,
  items,
  onChange,
  renderError,
  onClose,
  onOpen,
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
    onClose?.(selectedItem);
  };

  const open = () => {
    setIsOpen(true);
    onOpen?.(selectedItem);
  };

  const selectItem = (item: T) => {
    close();
    onChange(item);
  };

  return (
    <div>
      <StyledTrigger
        isOpen={isOpen}
        hasValue={Boolean(selectedItem)}
        onClick={open}
        hasError={hasError}
        isDisabled={isDisabled}
        type="button"
      >
        <StyledLabelContent>{label}</StyledLabelContent>
        {selectedItem?.label || triggerPlaceholder}
        <IconChevron width="0.75rem" />
      </StyledTrigger>

      <StyledModalMobileDropdown isOpen={isOpen}>
        <StyledHeader>
          <StyledTitle>{label}</StyledTitle>
          <ButtonCloseAnimated onClick={close} />
          <StyledLine />
        </StyledHeader>

        <StyledList>
          {items.map((item) => (
            <StyledListItem key={item.value} onClick={() => selectItem(item)}>
              {item.label}

              {item.value === selectedItem?.value && (
                <IconCheckmark
                  color={dsStyles.colors.green1}
                  width="1rem"
                  height="1rem"
                />
              )}
            </StyledListItem>
          ))}
        </StyledList>
      </StyledModalMobileDropdown>

      {renderError?.({ hasError })}
    </div>
  );
}
