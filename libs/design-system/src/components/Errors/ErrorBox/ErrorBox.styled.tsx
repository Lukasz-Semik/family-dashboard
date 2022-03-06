import styled from 'styled-components';

import { dsStyles } from '../../../utils/styles';
import { Typography16SemiBold } from '../../../utils/typography';

export const StyledWrapper = styled.div`
  background-color: ${dsStyles.colors.red2};
  color: ${dsStyles.colors.white};
  padding: 1rem;
  ${Typography16SemiBold};
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
`;

export const StyledIconWrapper = styled.div`
  margin-right: 0.5rem;
`;
