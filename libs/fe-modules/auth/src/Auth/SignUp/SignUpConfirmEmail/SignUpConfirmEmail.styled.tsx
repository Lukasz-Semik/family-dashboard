import styled from 'styled-components';

import { cssLinkLike } from '@family-dashboard/design-system';

export const StyledInnerWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const StyledInputsWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const StyledErrorWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledButtonResend = styled.div`
  ${cssLinkLike};
  margin-top: 1rem;
`;
