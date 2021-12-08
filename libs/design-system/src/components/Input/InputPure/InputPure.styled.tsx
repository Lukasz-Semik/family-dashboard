import styled from 'styled-components';

import { Typography20Regular } from '../../../utils/typography';
import { StyledInput, StyledLabel } from '../Input.styled';

export const StyledWrapper = styled(StyledLabel)`
  height: 4rem;
`;

export const StyledInputPure = styled(StyledInput)`
  ${Typography20Regular};
  text-align: center;
`;
