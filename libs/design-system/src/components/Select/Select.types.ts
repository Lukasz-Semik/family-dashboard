import { Placement } from '@popperjs/core';

export interface SelectItemBase {
  value: string;
  label: string;
}

export interface SelectProps<T> {
  items: T[];
  selectedItem: T | null;
  placement?: Placement;
  triggerPlaceholder: React.ReactNode;
  onChange: (selectedItem: T | null) => void;
  maxHeight?: string;
  label: React.ReactNode;
  hasError?: boolean;
  isDisabled?: boolean;
}
