import { dsStyles } from '../../../utils/styles';
import { LoaderFullScreenProps } from '../Loader.types';
import { LoaderSimple } from '../LoaderSimple/LoaderSimple';
import {
  StyledContentWrapper,
  StyledLoaderWrapper,
  StyledWrapper,
} from './LoaderFullScreen.styled';

export function LoaderFullScreen({
  content,
  color,
  size = 100,
}: LoaderFullScreenProps) {
  return (
    <StyledWrapper>
      <StyledLoaderWrapper>
        <LoaderSimple size={size} color={color || dsStyles.colors.orange4} />
      </StyledLoaderWrapper>
      <StyledContentWrapper>{content}</StyledContentWrapper>
    </StyledWrapper>
  );
}
