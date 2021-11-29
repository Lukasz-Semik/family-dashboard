import { useSelect } from 'downshift';

import { usePopperConfig } from '../../../hooks/usePopperConfig';
import { IconCheckmark } from '../../../icons/Icons';
import { dsStyles } from '../../../utils/styles';
import { SelectItemBase, SelectProps } from '../Select.types';
import {
  StyledLabelContent,
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
    onSelectedItemChange: (changes) => {
      console.log({ changes });
      onChange(changes.selectedItem || null);
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
      >
        <StyledLabelContent {...getLabelProps()}>{label}</StyledLabelContent>
        {selectedItem?.label || triggerPlaceholder}
      </StyledTrigger>

      <StyledPopper
        isOpen={isOpen}
        $maxHeight={maxHeight}
        {...getMenuProps({
          ref: menuElementRef,
          ...menuAttributes,
        })}
      >
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
      </StyledPopper>
    </StyledWrapper>
  );
}
