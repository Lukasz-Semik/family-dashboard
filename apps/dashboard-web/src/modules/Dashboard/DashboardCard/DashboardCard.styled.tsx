import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  cssLinkLike,
  dsStyles,
  Typography14SemiBold,
  Typography20SemiBold,
  WrapperCard,
} from '@family-dashboard/design-system';

export const StyledWrapper = styled(WrapperCard)`
  box-sizing: border-box;
  padding: 1.5rem;
  height: ${({ $height }) => $height || '224px'};

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    width: 368px;
  }
`;

export const StyledHeader = styled.header`
  color: ${dsStyles.colors.orange4};
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  justify-content: space-between;
`;

export const StyledHeaderTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledHeading = styled.h3`
  ${Typography20SemiBold};
`;

export const StyledIconWrapper = styled.div`
  margin-right: 8px;
`;

export const StyledLink = styled(Link)`
  ${cssLinkLike};
  color: ${dsStyles.colors.violet2};
  ${Typography14SemiBold};
`;
