import styled, { css } from 'styled-components';

import { dsStyles } from '../../utils/styles';
import { Typography16Regular } from '../../utils/typography';

interface Props {
  isVisible: boolean;
  isDisabled?: boolean;
}

export const StyledCheckedMarker = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid ${dsStyles.colors.violet4};
  border-radius: 4px;
  background-color: ${dsStyles.colors.grey3};
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  color: ${dsStyles.colors.orange3};

  transition: color ${dsStyles.transitions.standard},
    border-color ${dsStyles.transitions.standard};

  * {
    transition: transform ${dsStyles.transitions.standard},
      opacity ${dsStyles.transitions.standard};

    transform: scale(0.8);
    opacity: 0;

    ${({ isVisible }) =>
      isVisible &&
      css`
        transform: scale(1);
        opacity: 1;
      `};
  }
`;
/* color: ${({ isDisabled }) =>
    isDisabled ? dsStyles.colors.grey1 : dsStyles.colors.orange3}; */
interface StyledLabelProps {
  hasError?: boolean;
  isDisabled?: boolean;
}

export const StyledLabel = styled.label<StyledLabelProps>`
  ${Typography16Regular};
  display: flex;
  align-items: center;
  color: ${dsStyles.colors.violet4};
  cursor: pointer;
  transition: color ${dsStyles.transitions.standard};

  ${({ isDisabled }) =>
    isDisabled
      ? css`
          color: ${dsStyles.colors.grey1};
          cursor: not-allowed;

          ${StyledCheckedMarker} {
            color: ${dsStyles.colors.grey1};
            border-color: ${dsStyles.colors.grey1};
          }
        `
      : css`
          &:hover {
            color: ${dsStyles.colors.violet2};

            ${StyledCheckedMarker} {
              color: ${dsStyles.colors.violet1};
              border-color: ${dsStyles.colors.violet2};
            }
          }

          &:focus-within {
            color: ${dsStyles.colors.orange4};

            ${StyledCheckedMarker} {
              color: ${dsStyles.colors.orange3};
              border-color: ${dsStyles.colors.orange3};
            }
          }
        `}

  ${({ hasError }) =>
    hasError &&
    css`
      color: ${dsStyles.colors.red1};

      ${StyledCheckedMarker} {
        border-color: ${dsStyles.colors.red1};
      }
    `};
`;

export const StyledDefaultCheckbox = styled.input.attrs({
  type: 'checkbox' as string,
})`
  position: absolute;
  padding: 0;
  border: 0;
  /* https://css-tricks.com/comparing-various-ways-to-hide-things-in-css/#method-5-the-visually-hidden-class */
  width: 1px;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;
  height: 0;
  background-color: transparent;
`;
