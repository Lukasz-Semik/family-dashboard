import styled from 'styled-components';

import {
  dsStyles,
  Typography16Regular,
  Typography20Regular,
} from '@family-dashboard/design-system';

export const StyledErrorBox = styled.div`
  ${Typography20Regular};
  background-color: ${dsStyles.colors.red2};
  color: ${dsStyles.colors.white};
  border-radius: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  margin-bottom: 1.5rem;
`;

export const StyledDescription = styled.div`
  ${Typography16Regular};
  margin-bottom: 1.5rem;
  color: ${dsStyles.colors.red2};
  text-align: center;
`;

export const StyledIndicatorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
