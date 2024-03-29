import { useRef } from 'react';
import { FieldConfig } from 'formik';
import { times } from 'lodash';

import { FieldInputPure } from '../FieldInputPure/FieldInputPure';
import {
  StyledGroupWrapper,
  StyledInputWrapper,
} from './FieldInputPureConnectedGroup.styled';

interface Props {
  groupName: string;
  validate?: FieldConfig['validate'];
  quantity: number;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  autoFocus?: boolean;
}

export function FieldInputsPureConnectedGroup({
  groupName,
  validate,
  quantity,
  type = 'text',
  hasError,
  autoFocus,
  ...restProps
}: Props) {
  const ref = useRef<HTMLInputElement[] | null[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    restProps.onChange(e);
    const isLast = index + 1 === ref.current.length;
    if (e.target.value.length === 1 && !isLast) {
      ref.current[index + 1]?.focus();
      return;
    }

    const isFirst = index === 0;
    if (e.target.value === '' && !isFirst) {
      ref.current[index - 1]?.focus();
    }
  };

  const onKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const isFirst = index === 0;

    if (e.key === 'Backspace' && ref.current[index]?.value === '' && !isFirst) {
      setTimeout(() => {
        ref.current[index - 1]?.focus();
      }, 0);
      return;
    }
  };

  return (
    <StyledGroupWrapper>
      {times(quantity, (index) => (
        <StyledInputWrapper key={`${groupName}-${index}`}>
          <FieldInputPure
            ref={(el: HTMLInputElement | null) => {
              ref.current[index] = el;
            }}
            autoFocus={autoFocus && index === 0}
            onChange={(e) => onChange(e, index)}
            name={`${groupName}${index}`}
            label={groupName}
            onKeyDown={(e) => onKeyDown(e, index)}
            maxLength={1}
            hasError={hasError}
            type={type}
          />
        </StyledInputWrapper>
      ))}
    </StyledGroupWrapper>
  );
}
