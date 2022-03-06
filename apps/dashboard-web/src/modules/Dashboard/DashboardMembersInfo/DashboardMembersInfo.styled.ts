import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  cssLinkLike,
  dsStyles,
  Typography16SemiBold,
  WrapperCard,
} from '@family-dashboard/design-system';

export const StyledWrapper = styled.div`
  margin-bottom: 24px;
`;

export const StyledErrorWrapper = styled.div`
  margin-bottom: 16px;
`;

export const StyledHeader = styled.div`
  ${Typography16SemiBold};
  color: ${dsStyles.colors.orange4};
  margin-bottom: 8px;
`;

export const StyledCard = styled(WrapperCard)`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  margin-bottom: 24px;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    width: 368px;
  }
`;

export const StyledLink = styled(Link)`
  ${cssLinkLike};
`;
