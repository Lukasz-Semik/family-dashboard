import styled from 'styled-components';

import {
  cssLinkLike,
  dsStyles,
  Typography14Regular,
  Typography16SemiBold,
} from '@family-dashboard/design-system';

export const StyledButton = styled.button`
  ${cssLinkLike};
  ${Typography16SemiBold};
  width: 100%;
  text-align: center;
`;

export const StyledMargin = styled.div`
  margin-bottom: 26px;
`;

export const StyledText = styled.div`
  ${Typography14Regular};
  color: ${dsStyles.colors.grey1};
  padding-top: 4px;
  white-space: nowrap;
`;

export const StyledFieldsWrapper = styled.div`
  margin-bottom: 40px;
`;
