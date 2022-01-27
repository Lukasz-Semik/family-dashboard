import { useEffect, useState } from 'react';

import { IndicatorProgressCircle } from '../../IndicatorProgressCircle/IndicatorProgressCircle';
import { WrapperRoundShowAnimation } from '../../Wrappers/Wrappers';
import { ElementCircleAnimatedBaseProps } from '../Elements.types';

interface Props extends ElementCircleAnimatedBaseProps {
  children: React.ReactNode;
}

export function ElementCircleAnimatedBase({
  bgColor,
  barColor,
  strokeWidth,
  size,
  children,
}: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setProgress(100));
  }, []);

  return (
    <IndicatorProgressCircle
      bgColor={bgColor}
      barColor={barColor}
      size={size}
      strokeWidth={strokeWidth}
      progress={progress}
    >
      <WrapperRoundShowAnimation isVisible={Boolean(progress)}>
        {children}
      </WrapperRoundShowAnimation>
    </IndicatorProgressCircle>
  );
}
