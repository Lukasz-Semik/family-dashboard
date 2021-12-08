import { FieldConfig } from 'formik';

import { InputPureProps, InputPure } from '@family-dashboard/design-system';

import { useFormControlField } from '../../hooks/useFormControlField';
import { forwardRef } from 'react';

interface Props extends InputPureProps {
  validate?: FieldConfig['validate'];
  name: string;
}

export const FieldInputPure = forwardRef<HTMLInputElement, Props>(
  ({ validate, name, onChange, ...restProps }, ref) => {
    const { hasError, fieldBase } = useFormControlField({
      validate,
      name,
    });

    return (
      <InputPure
        {...restProps}
        ref={ref}
        value={fieldBase.value}
        hasError={hasError || restProps.hasError}
        onChange={(e) => {
          fieldBase.onChange(e);
          onChange?.(e);
        }}
        onBlur={fieldBase.onBlur}
        name={fieldBase.name}
      />
    );
  }
);
