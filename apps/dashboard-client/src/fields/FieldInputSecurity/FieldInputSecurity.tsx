import { FieldConfig } from 'formik';

import {
  ErrorMessage,
  InputSecurity,
  InputSecurityProps,
} from '@family-dashboard/design-system';

import { useFieldInput } from '../hooks/useFieldInput';

interface Props extends InputSecurityProps {
  validate?: FieldConfig['validate'];
  name: string;
}

export function FieldInputSecurity({ validate, name, ...restProps }: Props) {
  const { hasError, fieldBase, onTransitionEnd, errorMessage } = useFieldInput({
    validate,
    name,
  });

  return (
    <InputSecurity
      {...restProps}
      hasError={hasError || restProps.hasError}
      onChange={fieldBase.onChange}
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
