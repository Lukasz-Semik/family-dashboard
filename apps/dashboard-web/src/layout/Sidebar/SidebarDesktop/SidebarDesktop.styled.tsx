import styled from 'styled-components';

import {
  dsStyles,
  Typography16Black,
  Typography24SemiBold,
} from '@family-dashboard/design-system';

import { SIDEBAR_WIDTH } from '../../Layout.const';

export const StyledWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${SIDEBAR_WIDTH};
  background-color: ${dsStyles.colors.white};
  box-sizing: border-box;
  padding: 1rem 1rem 2rem 2rem;
`;

export const StyledFamilyName = styled.div`
  ${Typography16Black};
  color: ${dsStyles.colors.orange4};
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const StyledAvatarWrapper = styled.div`
  margin-right: 1rem;
`;

export const StyledAvatarGroupWrapper = styled.div`
  margin-bottom: 3.5rem;
  display: flex;
  align-items: center;
`;

export const StyledName = styled.div`
  ${Typography24SemiBold};
  color: ${dsStyles.colors.grey1};
`;
