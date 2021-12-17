import styled from 'styled-components';

import {
  dsStyles,
  Typography12SemiBold,
} from '@family-dashboard/design-system';

export const StyledText = styled.div`
  text-align: right;
  ${Typography12SemiBold};
  color: ${dsStyles.colors.grey2};
  margin-bottom: 0.5rem;
`;
