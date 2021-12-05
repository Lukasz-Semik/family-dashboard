import { useState } from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import { StyledWrapper } from '../Stories.styled';
import { Select as SelectComponent } from './Select';
import { SelectItemBase, SelectProps } from './Select.types';

const defaultItems: SelectItemBase[] = Array.from({
  length: 20,
}).map((_, i) => ({
  value: String(i),
  label: `Item #${i + 1}`,
}));

export default {
  component: SelectComponent,
  title: 'Select',
  args: {
    label: 'Label',
    isDisabled: false,
    hasError: false,
    items: defaultItems,
  },
} as Meta;

export const Select: ComponentStory<React.FC<SelectProps<SelectItemBase>>> = ({
  ...props
}) => {
  const [selectedItem, setSelectedItem] = useState<SelectItemBase | null>(null);

  return (
    <StyledWrapper>
      <SelectComponent
        {...props}
        selectedItem={selectedItem}
        triggerPlaceholder="Select..."
        onChange={(item) => setSelectedItem(item)}
      />
    </StyledWrapper>
  );
};
