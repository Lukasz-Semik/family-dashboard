import {
  Checkbox,
  CheckboxProps,
  ErrorMessage,
} from '@family-dashboard/design-system';
import { useFormControlField } from '../../hooks/useFormControlField';
import { FieldConfig } from 'formik';

interface Props extends CheckboxProps {
  validate?: FieldConfig['validate'];
  name: string;
}

export function FieldCheckbox({
  name,
  validate,
  onChange,
  ...restProps
}: Props) {
  const { hasError, fieldBase, onTransitionEnd, errorMessage } =
    useFormControlField({
      validate,
      name,
      type: 'checkbox',
    });

  return (
    <div>
      <Checkbox
        {...restProps}
        checked={fieldBase.checked}
        hasError={hasError}
        onChange={(e) => {
          fieldBase.onChange(e);
          onChange?.(e);
        }}
        onBlur={fieldBase.onBlur}
        name={fieldBase.name}
      />

      <ErrorMessage onTransitionEnd={onTransitionEnd} isVisible={hasError}>
        {errorMessage}
      </ErrorMessage>
    </div>
  );
}
