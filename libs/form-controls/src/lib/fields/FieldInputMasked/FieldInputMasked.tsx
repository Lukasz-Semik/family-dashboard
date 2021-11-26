import { FieldConfig } from 'formik';

import { InputMasked, InputMaskedProps } from '@family-dashboard/design-system';
import { ErrorMessage } from '@family-dashboard/design-system';
import { useFormControlField } from '@family-dashboard/form-controls';

interface Props extends InputMaskedProps {
  validate?: FieldConfig['validate'];
  name: string;
}

export function FieldInputMasked({ validate, name, ...props }: Props) {
  const { hasError, fieldBase, onTransitionEnd, errorMessage } =
    useFormControlField({
      validate,
      name,
    });

  return (
    <InputMasked
      value={fieldBase.value}
      name={fieldBase.name}
      hasError={hasError}
      renderError={(renderProps) => (
        <ErrorMessage
          onTransitionEnd={onTransitionEnd}
          isVisible={renderProps.hasError}
        >
          {errorMessage}
        </ErrorMessage>
      )}
      {...props}
    />
  );
}
