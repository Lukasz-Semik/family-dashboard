import styled from 'styled-components';

interface Props {
  $width?: string;
  $height?: string;
  $color?: string;
}

export const StyledIcon = styled.div<Props>`
  width: ${({ $width }) => $width || '22px'};
  height: ${({ $height }) => $height || '22px'};
  color: ${({ $color }) => $color};

  svg {
    width: ${({ $width }) => $width || '22px'};
    height: ${({ $height }) => $height || '22px'};
  }
`;
