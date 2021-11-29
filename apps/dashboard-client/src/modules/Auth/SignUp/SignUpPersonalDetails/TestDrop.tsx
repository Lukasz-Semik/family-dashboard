import { useSelect } from 'downshift';
import { Placement } from '@popperjs/core';
import {
  dsStyles,
  IconCheckmark,
  usePopperConfig,
} from '@family-dashboard/design-system';

import {
  StyledTrigger,
  StyledWrapper,
  StyledLabelContent,
  StyledPopper,
  StyledListItem,
} from './TestDrop.styled';

export interface SelectItemBase {
  value: string;
  label: string;
}

interface SelectProps<T> {
  items: T[];
  selectedItem: T | null;
  placement?: Placement;
  triggerPlaceholder: React.ReactNode;
  onChange: (selectedItem: T | null) => void;
}

export function SelectDesktop<T extends SelectItemBase>({
  items,
  placement,
  triggerPlaceholder,
  onChange,
  selectedItem,
}: SelectProps<T>) {
  const {
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    getLabelProps,
    isOpen,
    setHighlightedIndex,
    openMenu,
    closeMenu,
  } = useSelect({
    items,
    onSelectedItemChange: (changes) => {
      console.log({ changes });
      onChange(changes.selectedItem || null);
    },
  });

  const { menuAttributes, wrapperElementRef, menuElementRef } =
    usePopperConfig(placement);
  console.log(selectedItem);
  return (
    <StyledWrapper ref={wrapperElementRef}>
      <StyledTrigger
        {...getToggleButtonProps()}
        isOpen={isOpen}
        hasValue={Boolean(selectedItem)}
      >
        <StyledLabelContent>asdasd</StyledLabelContent>
        {selectedItem?.label || triggerPlaceholder}
      </StyledTrigger>

      <StyledPopper
        isOpen={isOpen}
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
