import { useCallback } from 'react';
import { FieldConfig } from 'formik';

import {
  DatePickerInputExact,
  DatePickerInputExactProps,
  ErrorMessage,
} from '@family-dashboard/design-system';

import { useFormControlField } from '../../hooks/useFormControlField';

interface Props extends Omit<DatePickerInputExactProps, 'onChange' | 'value'> {
  name: string;
  validate?: FieldConfig['validate'];
}

export function FieldDatePickerInputExactStandard({
  name,
  validate,
  onClose,
  ...restProps
}: Props) {
  const { hasError, fieldBase, onTransitionEnd, errorMessage, fieldHandlers } =
    useFormControlField({
      validate,
      name,
    });

  const handleChange = useCallback(
    (value) => {
      fieldHandlers.setValue(value);
    },
    [fieldHandlers]
  );

  return (
    <DatePickerInputExact
      onChange={handleChange}
      value={fieldBase.value}
      hasError={hasError}
      onClose={() => {
        onClose?.();
        fieldHandlers.setTouched(true, true);
      }}
      renderError={(renderProps) => (
        <ErrorMessage
          onTransitionEnd={onTransitionEnd}
          isVisible={renderProps.hasError}
        >
          {errorMessage}
        </ErrorMessage>
      )}
      {...restProps}
    />
  );
}
