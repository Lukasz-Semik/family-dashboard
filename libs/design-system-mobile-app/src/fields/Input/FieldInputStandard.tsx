import React from 'react';
import { View } from 'react-native';
import { FieldConfig, useField, useFormikContext } from 'formik';

import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { InputProps } from '../../components/Input/Input.types';
import { InputStandard } from '../../components/Input/InputStandard/InputStandard';

interface Props extends InputProps {
  name: string;
  validate?: FieldConfig['validate'];
}

export function FieldInputStandard({ name, validate, ...props }: Props) {
  const [fieldBase, fieldMeta, fieldHandlers] = useField({
    validate,
    name,
  });

  const { handleChange } = useFormikContext();

  const hasError = Boolean(fieldMeta.error && fieldMeta.touched);

  return (
    <View style={{ marginBottom: 30 }}>
      <InputStandard
        hasError={hasError}
        onChangeText={handleChange(name)}
        onBlur={() => {
          fieldHandlers.setTouched(true);
        }}
        value={fieldBase.value}
        renderError={() => (
          <ErrorMessage isVisible={hasError}>{fieldMeta.error}</ErrorMessage>
        )}
        {...props}
      />
    </View>
  );
}
