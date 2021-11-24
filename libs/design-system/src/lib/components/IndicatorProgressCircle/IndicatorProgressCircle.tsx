import {
  StyledChildrenWrapper,
  StyledWrapper,
} from './IndicatorProgressCircle.styled';
import { IndicatorProgressCircleProps } from './IndicatorProgressCircle.types';

export const IndicatorProgressCircle = ({
  progress,
  bgColor,
  barColor,
  size,
  strokeWidth,
  children,
}: IndicatorProgressCircleProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumReference = radius * Math.PI * 2;
  const dash = (progress * circumReference) / 100;

  return (
    <StyledWrapper $size={size}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          fill="none"
          stroke={bgColor}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />

        <circle
          fill="none"
          stroke={barColor}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          strokeDasharray={[dash, circumReference - dash]}
          strokeLinecap="round"
          style={{ transition: 'all 1s' }}
        />
      </svg>
      <StyledChildrenWrapper>{children}</StyledChildrenWrapper>
    </StyledWrapper>
  );
};
