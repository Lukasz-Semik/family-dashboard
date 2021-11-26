import { Typography12SemiBold } from '@family-dashboard/design-system';
import styled from 'styled-components';

import { dsStyles } from '../../../utils/styles';

export const StyledToggleTypeButton = styled.button`
  ${Typography12SemiBold};
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${dsStyles.colors.violet2};
  text-transform: uppercase;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
