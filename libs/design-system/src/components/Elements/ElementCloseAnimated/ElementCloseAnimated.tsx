import { useEffect, useState } from 'react';

import { IconCrossmark } from '../../../icons/Icons';
import { IndicatorProgressCircle } from '../../IndicatorProgressCircle/IndicatorProgressCircle';
import { WrapperRoundShowAnimation } from '../../Wrappers/Wrappers';
import { ElementCloseAnimatedProps } from '../Elements.types';

export function ElementCloseAnimated({
  bgColor,
  barColor,
  strokeWidth,
  size,
  iconSize,
  iconColor,
}: ElementCloseAnimatedProps) {
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
        <IconCrossmark color={iconColor} width={iconSize} height={iconSize} />
      </WrapperRoundShowAnimation>
    </IndicatorProgressCircle>
  );
}
