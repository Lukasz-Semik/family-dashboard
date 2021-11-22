import { random } from 'lodash';

export const generateNumericCode = (length: number) => {
  return Array.from({ length })
    .map(() => random(0, 9))
    .join('');
};
