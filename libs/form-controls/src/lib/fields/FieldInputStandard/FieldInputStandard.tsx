import { FieldConfig } from 'formik';

import {
  ErrorMessage,
  InputProps,
  InputStandard,
} from '@family-dashboard/design-system';

import { useFormControlField } from '../../hooks/useFormControlField';

interface Props extends InputProps {
  validate?: FieldConfig['validate'];
  name: string;
}

export function FieldInputStandard({
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
    <InputStandard
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
