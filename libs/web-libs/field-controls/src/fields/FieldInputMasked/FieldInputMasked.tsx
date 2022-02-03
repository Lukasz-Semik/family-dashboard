import { FieldConfig } from 'formik';

import { InputMasked, InputMaskedProps } from '@family-dashboard/design-system';
import { ErrorMessage } from '@family-dashboard/design-system';

import { useFormControlField } from '../../hooks/useFormControlField';

interface Props extends InputMaskedProps {
  validate?: FieldConfig['validate'];
  name: string;
}

export function FieldInputMasked({ validate, name, ...props }: Props) {
  const { hasError, fieldBase, onTransitionEnd, errorMessage, fieldHandlers } =
    useFormControlField({
      validate,
      name,
    });

  return (
    <InputMasked
      {...props}
      value={fieldBase.value}
      name={fieldBase.name}
      hasError={hasError}
      onBlur={(e) => {
        fieldHandlers.setTouched(true);
        fieldBase.onChange(e);
      }}
      onChange={fieldBase.onChange}
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
