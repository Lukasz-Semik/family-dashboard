import 'react-toastify/dist/ReactToastify.css';

import { StyledWrapper } from './Toast.styled';

export const ToastRoot = () => {
  return (
    <StyledWrapper
      autoClose={3000}
      closeOnClick
      closeButton={<div />}
      hideProgressBar
    />
  );
};
