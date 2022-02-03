import { rgba } from 'polished';

import {
  Args as AnimatedPropertyArgs,
  useAnimatedProperty,
} from './useAnimatedProperty';

interface Args extends AnimatedPropertyArgs {
  startColor: string;
  endColor: string;
}

export function useAnimatedColor({ startColor, endColor, ...props }: Args) {
  const [colorAnimation, runColorAnimation, revertColorAnimation] =
    useAnimatedProperty(props);

  const animatedColor = colorAnimation.current.interpolate({
    inputRange: [0, 1],
    outputRange: [rgba(startColor, 1), rgba(endColor, 1)],
  });

  return {
    animatedColor,
    runColorAnimation,
    revertColorAnimation,
  };
}
