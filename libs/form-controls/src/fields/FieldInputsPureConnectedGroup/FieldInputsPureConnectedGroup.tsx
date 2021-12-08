import { FieldInputPure } from '@family-dashboard/form-controls';
import { FieldConfig } from 'formik';
import { useRef } from 'react';
import { times } from 'lodash';

import {
  StyledGroupWrapper,
  StyledInputWrapper,
} from './FieldInputPureConnectedGroup.styled';

interface Props {
  groupName: string;
  validate?: FieldConfig['validate'];
  quantity: number;
  type?: string;
}

export function FieldInputsPureConnectedGroup({
  groupName,
  validate,
  quantity,
  type = 'text',
}: Props) {
  const ref = useRef<HTMLInputElement[] | null[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    console.log(e.target.value);
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
    if (e.key === 'Backspace') {
      console.log(e.target);
    }
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
            onChange={(e) => onChange(e, index)}
            name={`${groupName}${index}`}
            label={groupName}
            onKeyDown={(e) => onKeyDown(e, index)}
            maxLength={1}
            type={type}
          />
        </StyledInputWrapper>
      ))}
    </StyledGroupWrapper>
  );
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.value.length === 1) {
  //   }
  // };

  // return (
  //   <StyledGroupWrapper>
  //     <StyledInputWrapper>
  //       <FieldInputPure ref={ref1} name={`${groupName}-1`} label={groupName} />
  //     </StyledInputWrapper>
  //     <StyledInputWrapper>
  //       <FieldInputPure
  //         onChange={(e) => console.log(e)}
  //         ref={ref2}
  //         name={`${groupName}-2`}
  //         label={groupName}
  //       />
  //     </StyledInputWrapper>
  //     <StyledInputWrapper>
  //       <FieldInputPure ref={ref3} name={`${groupName}-3`} label={groupName} />
  //     </StyledInputWrapper>
  //     <StyledInputWrapper>
  //       <FieldInputPure ref={ref4} name={`${groupName}-4`} label={groupName} />
  //     </StyledInputWrapper>
  //   </StyledGroupWrapper>
  // );
}
