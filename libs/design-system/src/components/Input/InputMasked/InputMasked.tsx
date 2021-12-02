import ReactInputMask from 'react-input-mask';

import { InputMaskedProps } from '../Input.types';
import { InputStandard } from '../InputStandard/InputStandard';

export function InputMasked({ mask, ...props }: InputMaskedProps) {
  return (
    <ReactInputMask
      value={props.value}
      mask={mask || '99-99-9999'}
      onChange={props.onChange}
      disabled={props.disabled}
      onBlur={props.onBlur}
    >
      {() => <InputStandard {...props} onBlur={props.onBlur} />}
    </ReactInputMask>
  );
}
