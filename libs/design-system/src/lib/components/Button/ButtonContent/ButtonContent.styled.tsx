import styled from 'styled-components';

import { dsStyles } from '../../../utils/styles';
import { ButtonContentProps } from './ButtonContent.types';

export const StyledChildrenWrapper = styled.div<ButtonContentProps>`
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  transition: opacity ${dsStyles.transitions.standard};
`;

export const StyledLoaderWrapper = styled.div<ButtonContentProps>`
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  transition: opacity ${dsStyles.transitions.standard};
  position: absolute;
`;
