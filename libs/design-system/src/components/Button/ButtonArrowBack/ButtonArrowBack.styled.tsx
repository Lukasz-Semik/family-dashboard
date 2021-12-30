import styled from 'styled-components';

import { dsStyles } from '../../../utils/styles';
import { Typography12Regular } from '../../../utils/typography';

export const StyledBackButton = styled.button`
  ${Typography12Regular};
  display: flex;
  align-items: center;
  color: ${dsStyles.colors.grey1};

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
`;

export const StyledIconWrapper = styled.div`
  margin-right: 0.5rem;
`;
