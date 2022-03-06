import styled from 'styled-components';

import {
  cssLinkLike,
  dsStyles,
  Typography12Regular,
  Typography16SemiBold,
} from '@family-dashboard/design-system';

export const StyledDescription = styled.div`
  ${Typography12Regular};
  color: ${dsStyles.colors.grey1};
  margin-bottom: 16px;
`;

export const StyledButton = styled.button`
  ${cssLinkLike};
  ${Typography16SemiBold};
  width: 100%;
  text-align: center;
`;
