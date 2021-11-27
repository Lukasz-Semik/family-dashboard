import { Loader } from '../../Loader/Loader';
import {
  StyledChildrenWrapper,
  StyledLoaderWrapper,
} from './ButtonContent.styled';
import { ButtonContentProps } from './ButtonContent.types';

export const ButtonContent = ({ children, isLoading }: ButtonContentProps) => {
  return (
    <>
      <StyledChildrenWrapper isLoading={isLoading}>
        {children}
      </StyledChildrenWrapper>
      <StyledLoaderWrapper data-testid="button-loader" isLoading={isLoading}>
        <Loader size={20} />
      </StyledLoaderWrapper>
    </>
  );
};
