import { useRef } from 'react';
import { Animated } from 'react-native';
import { rgba } from 'polished';

interface Args {
  startColor: string;
  endColor: string;
  duration?: number;
}

export function useAnimatedColor({
  startColor,
  endColor,
  duration = 300,
}: Args) {
  const colorAnimation = useRef(new Animated.Value(0));

  const runColorAnimation = () => {
    Animated.timing(colorAnimation.current, {
      toValue: 1,
      duration,
      useNativeDriver: false,
    }).start();
  };

  const revertColorAnimation = () => {
    Animated.timing(colorAnimation.current, {
      toValue: 0,
      duration,
      useNativeDriver: false,
    }).start();
  };

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
