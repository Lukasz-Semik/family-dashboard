import { useRef } from 'react';
import { Animated } from 'react-native';

export interface Args {
  duration?: number;
  useNativeDriver?: boolean;
}

export function useAnimatedProperty({
  duration = 300,
  useNativeDriver = false,
}: Args): [React.MutableRefObject<Animated.Value>, () => void, () => void] {
  const propertyAnimation = useRef(new Animated.Value(0));

  const runPropertyAnimation = () => {
    Animated.timing(propertyAnimation.current, {
      toValue: 1,
      duration,
      useNativeDriver,
    }).start();
  };

  const revertPropertyAnimation = () => {
    Animated.timing(propertyAnimation.current, {
      toValue: 0,
      duration,
      useNativeDriver,
    }).start();
  };

  return [propertyAnimation, runPropertyAnimation, revertPropertyAnimation];
}
