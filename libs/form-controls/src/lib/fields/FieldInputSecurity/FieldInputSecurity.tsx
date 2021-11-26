import { FieldConfig } from 'formik';

import {
  ErrorMessage,
  InputSecurity,
  InputSecurityProps,
} from '@family-dashboard/design-system';

import { useFormControlField } from '../../hooks/useFormControlField';

interface Props extends InputSecurityProps {
  validate?: FieldConfig['validate'];
  name: string;
}

export function FieldInputSecurity({
  validate,
  name,
  onChange,
  ...restProps
}: Props) {
  const { hasError, fieldBase, onTransitionEnd, errorMessage } =
    useFormControlField({
      validate,
      name,
    });

  return (
    <InputSecurity
      {...restProps}
      value={fieldBase.value}
      hasError={hasError || restProps.hasError}
      onChange={(e) => {
        fieldBase.onChange(e);
        onChange?.(e);
      }}
      onBlur={fieldBase.onBlur}
      name={fieldBase.name}
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
