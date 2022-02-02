import React from 'react';
import { useEffect, useRef } from 'react';
import { Animated, Text } from 'react-native';

import { StyledErrorMessage } from './ErrorMessage.styled';

interface Props {
  isVisible?: boolean;
  children: React.ReactNode;
}

export function ErrorMessage({ isVisible }: Props) {
  const anmiationRef = useRef(new Animated.Value(0));
  console.log({ isVisible });
  const animateIn = () => {
    Animated.timing(anmiationRef.current, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const animateOut = () => {
    Animated.timing(anmiationRef.current, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (isVisible) {
      animateIn();
    } else {
      animateOut();
    }
  }, [isVisible]);

  return (
    <StyledErrorMessage
      style={{
        opacity: anmiationRef.current,
        transform: [
          {
            scaleY: anmiationRef.current.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
        ],
      }}
    >
      Error super long, oh yeah
    </StyledErrorMessage>
  );
}
