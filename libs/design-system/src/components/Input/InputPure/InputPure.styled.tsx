import styled from 'styled-components';

import { dsStyles } from '../../../utils/styles';
import { Typography20Regular } from '../../../utils/typography';
import { StyledInput, StyledLabel } from '../Input.styled';

export const StyledWrapper = styled(StyledLabel)`
  height: 4rem;
  background-color: ${dsStyles.colors.grey3};
`;

export const StyledInputPure = styled(StyledInput)`
  ${Typography20Regular};
  text-align: center;
`;
