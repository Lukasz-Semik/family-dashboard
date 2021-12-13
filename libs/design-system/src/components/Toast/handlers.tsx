import { toast, ToastOptions } from 'react-toastify';

import { StyledToastMessage } from './Toast.styled';
import { ToastVariant } from './Toast.types';

export const showSuccessToast = (
  msg: React.ReactNode,
  config: ToastOptions = {}
) =>
  toast(
    <StyledToastMessage variant={ToastVariant.Success}>
      {msg}
    </StyledToastMessage>,
    config
  );

export const showErrorToast = (
  msg: React.ReactNode,
  config: ToastOptions = {}
) =>
  toast(
    <StyledToastMessage variant={ToastVariant.Error}>{msg}</StyledToastMessage>,
    config
  );

export const showWarningToast = (
  msg: React.ReactNode,
  config: ToastOptions = {}
) =>
  toast(
    <StyledToastMessage variant={ToastVariant.Warning}>
      {msg}
    </StyledToastMessage>,
    config
  );

export const showInfoToast = (
  msg: React.ReactNode,
  config: ToastOptions = {}
) =>
  toast(
    <StyledToastMessage variant={ToastVariant.Info}>{msg}</StyledToastMessage>,
    config
  );
