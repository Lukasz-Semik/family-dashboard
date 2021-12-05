import { FieldConfig } from 'formik';
import { useCallback } from 'react';

import {
  ErrorMessage,
  SelectItemBase,
  SelectProps,
  Select,
} from '@family-dashboard/design-system';

import { useFormControlField } from '../../hooks/useFormControlField';

interface Props<T> extends Omit<SelectProps<T>, 'onChange' | 'selectedItem'> {
  validate?: FieldConfig['validate'];
  name: string;
  onChange?: SelectProps<T>['onChange'];
}

export function FieldSelect<T extends SelectItemBase>({
  validate,
  name,
  onChange,
  items,
  ...restProps
}: Props<T>) {
  const { hasError, fieldBase, onTransitionEnd, errorMessage, fieldHandlers } =
    useFormControlField({
      validate,
      name,
    });

  const handleChange = useCallback(
    (selectedItem?: T | null) => {
      fieldHandlers.setValue(selectedItem?.value);
    },
    [fieldHandlers]
  );

  return (
    <Select
      {...restProps}
      items={items}
      selectedItem={
        items.find((item) => item.value === fieldBase.value) ?? null
      }
      hasError={hasError || restProps.hasError}
      onChange={(selectedItem) => {
        handleChange(selectedItem);
        onChange?.(selectedItem);
      }}
      onClose={() => fieldHandlers.setTouched(true, true)}
      renderError={(renderProps) => (
        <ErrorMessage
          onTransitionEnd={onTransitionEnd}
          isVisible={renderProps.hasError}
        >
          {errorMessage}
        </ErrorMessage>
      )}
    />
  );
}
