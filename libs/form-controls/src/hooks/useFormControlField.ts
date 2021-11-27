import { useEffect, useState } from 'react';
import { FieldConfig, useField } from 'formik';

interface Args {
  validate?: FieldConfig['validate'];
  type?: FieldConfig['type'];
  name: string;
}

export function useFormControlField({ validate, name, type }: Args) {
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldBase, fieldMeta] = useField({
    validate,
    name,
    type,
  });

  const hasError = Boolean(fieldMeta.error && fieldMeta.touched);

  const onTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (!hasError) {
      setErrorMessage('');
    }
  };

  useEffect(() => {
    if (fieldMeta.error) {
      setErrorMessage(fieldMeta.error ?? '');
    }
  }, [fieldMeta.error, hasError]);

  return { hasError, fieldBase, onTransitionEnd, errorMessage };
}
