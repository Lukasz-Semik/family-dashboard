import { Meta } from '@storybook/react';

import {
  showErrorToast,
  showInfoToast,
  showSuccessToast,
  showWarningToast,
} from './handlers';
import { StyledToastMessage } from './Toast.styled';
import { ToastVariant } from './Toast.types';
import { ToastRoot as ToastRootComponent } from './ToastRoot';

export default {
  component: ToastRootComponent,
  title: 'Toasts',
} as Meta;

export const ToastSuccess = () => (
  <>
    <ToastRootComponent />
    <button onClick={() => showSuccessToast('Success')}>
      Trigger success toast
    </button>
  </>
);

export const ToastError = () => (
  <>
    <ToastRootComponent />
    <button onClick={() => showErrorToast('Error')}>Trigger error toast</button>
  </>
);

export const ToasInfo = () => (
  <>
    <ToastRootComponent />
    <button onClick={() => showInfoToast('Info')}>Trigger info toast</button>
  </>
);

export const ToasWarning = () => (
  <>
    <ToastRootComponent />
    <button onClick={() => showWarningToast('Warning')}>
      Trigger warning toast
    </button>
  </>
);

export const ToastMessages = () => {
  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <StyledToastMessage variant={ToastVariant.Success}>
          Success
        </StyledToastMessage>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <StyledToastMessage variant={ToastVariant.Error}>
          Error
        </StyledToastMessage>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <StyledToastMessage variant={ToastVariant.Warning}>
          Warning
        </StyledToastMessage>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <StyledToastMessage variant={ToastVariant.Info}>
          Info
        </StyledToastMessage>
      </div>
    </>
  );
};
