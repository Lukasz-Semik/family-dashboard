import styled, { css } from 'styled-components';

import { dsStyles } from '../../../utils/styles';
import {
  Typography14Regular,
  Typography14SemiBold,
  Typography20SemiBold,
} from '../../../utils/typography';

export const StyledListStandardNoItemsMessage = styled.p`
  ${Typography20SemiBold};
  color: ${dsStyles.colors.grey1};
`;

export const StyledListStandardHeadersWrapper = styled.div`
  display: none;
  align-items: center;
  box-sizing: border-box;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    display: flex;
  }
`;

export const StyledListStandardHeaderColumn = styled.div<{ width: string }>`
  ${Typography14SemiBold};
  color: ${dsStyles.colors.grey1};
  width: ${({ width }) => width};
`;

export const StyledListStandardItem = styled.li<{ isInteractive?: boolean }>`
  display: block;
  position: relative;
  align-items: center;
  margin-bottom: 0.5rem;
  min-height: 3rem;
  list-style: none;
  transition: color ${dsStyles.transitions.standard};
  box-sizing: border-box;
  ${Typography14Regular};
  color: ${dsStyles.colors.violet4};

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    display: flex;
    margin-bottom: 0.25rem;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid ${dsStyles.colors.violet1};
  }

  ${({ isInteractive }) =>
    isInteractive &&
    css`
      cursor: pointer;

      &:hover,
      &:focus {
        color: ${dsStyles.colors.violet2};
      }
    `}
`;

export const StyledListStandardItemColumn = styled.div<{ width: string }>`
  width: 100%;
  margin-bottom: 0.5rem;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    width: ${({ width }) => width};
    margin-bottom: 0;
  }
`;
