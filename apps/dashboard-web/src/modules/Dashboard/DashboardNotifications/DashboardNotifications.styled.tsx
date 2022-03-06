import styled from 'styled-components';

import {
  dsStyles,
  Typography24SemiBold,
} from '@family-dashboard/design-system';

export const StyledEmptyMessage = styled.div`
  ${Typography24SemiBold};
  color: ${dsStyles.colors.grey2};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 146px;
`;
