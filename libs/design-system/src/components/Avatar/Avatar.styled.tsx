import styled from 'styled-components';

import { dsStyles } from '../../utils/styles';
import { Typography12Regular } from '../../utils/typography';

interface Props {
  $size: string;
}

export const StyledWrapper = styled.div<Props>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  border: 1px solid ${dsStyles.colors.violet2};
  background-color: ${dsStyles.colors.grey3};
  color: ${dsStyles.colors.orange4};
  ${Typography12Regular};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
