import { dsStyles } from '../../../utils/styles';
import { LoaderProps } from '../Loader.types';
import { LoaderSimple } from '../LoaderSimple/LoaderSimple';
import { StyledLoaderWrapper, StyledWrapper } from './LoaderFullContent.styled';

export function LoaderFullContent({ color, size = 100 }: LoaderProps) {
  return (
    <StyledWrapper>
      <StyledLoaderWrapper>
        <LoaderSimple size={size} color={color || dsStyles.colors.violet2} />
      </StyledLoaderWrapper>
    </StyledWrapper>
  );
}
