import { useSelect } from 'downshift';

import { usePopperConfig } from '../../../hooks/usePopperConfig';
import { IconCheckmark, IconChevron } from '../../../icons/Icons';
import { dsStyles } from '../../../utils/styles';
import { SelectItemBase, SelectProps } from '../Select.types';
import {
  StyledLabelContent,
  StyledListContent,
  StyledListItem,
  StyledPopper,
  StyledTrigger,
  StyledWrapper,
} from './SelectDesktop.styled';

export function SelectDesktop<T extends SelectItemBase>({
  items,
  placement,
  triggerPlaceholder,
  onChange,
  selectedItem,
  hasError,
  label,
  isDisabled,
  renderError,
  onClose,
  onOpen,
  maxHeight = '12.5rem',
}: SelectProps<T>) {
  const {
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    getLabelProps,
    isOpen,
  } = useSelect({
    items,
    onIsOpenChange: (changes) => {
      if (!changes.isOpen) {
        onClose?.(selectedItem);
      } else {
        onOpen?.(selectedItem);
      }
    },
    onSelectedItemChange: (changes) => {
      if (changes.selectedItem) {
        onChange(changes.selectedItem);
      }
    },
  });

  const { menuAttributes, wrapperElementRef, menuElementRef } =
    usePopperConfig(placement);

  return (
    <StyledWrapper ref={wrapperElementRef}>
      <StyledTrigger
        {...getToggleButtonProps()}
        isOpen={isOpen}
        hasValue={Boolean(selectedItem)}
        hasError={hasError}
        isDisabled={isDisabled}
        type="button"
      >
        <StyledLabelContent {...getLabelProps()}>{label}</StyledLabelContent>
        {selectedItem?.label || triggerPlaceholder}
        <IconChevron width="0.75rem" />
      </StyledTrigger>

      <StyledPopper
        isOpen={isOpen}
        {...getMenuProps({
          ref: menuElementRef,
          ...menuAttributes,
        })}
      >
        <StyledListContent $maxHeight={maxHeight}>
          {items.map((item, index) => (
            <StyledListItem
              key={item.value}
              {...getItemProps({ key: item.value, item, index })}
            >
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
        </StyledListContent>
      </StyledPopper>

      {renderError?.({ hasError })}
    </StyledWrapper>
  );
}
