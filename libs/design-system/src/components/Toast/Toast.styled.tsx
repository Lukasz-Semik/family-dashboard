import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

import { dsStyles } from '@family-dashboard/design-system';

import { ToastVariant } from './Toast.types';

export const StyledWrapper = styled(ToastContainer)`
  z-index: 1000000;
  width: 100%;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    width: auto;
  }

  .Toastify {
    &__toast {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      min-height: 0;
      color: ${dsStyles.colors.violet4};
      font-family: 'Montserrat', sans-serif;
      border-radius: 0;
      /* TODO: colors to rgba */
      padding: 0;
      box-shadow: 3px 3px 15px rgba(252, 157, 69, 0.4);

      &:hover {
        cursor: default;
      }

      @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
        border-radius: 4px;
      }
    }

    &__toast-body {
      margin: 0;
      padding: 0;
    }
  }
`;

interface Props {
  variant: ToastVariant;
}
export const StyledToastMessage = styled.div<Props>`
  width: 100%;
  padding: 0.5rem 1rem;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    width: 16.5rem;
  }

  background-color: ${({ variant }) => {
    switch (variant) {
      case ToastVariant.Error:
        return dsStyles.colors.red1;
      case ToastVariant.Info:
        return dsStyles.colors.violet1;
      case ToastVariant.Warning:
        return dsStyles.colors.yellow1;
      default:
        return dsStyles.colors.green1;
    }
  }};
`;
