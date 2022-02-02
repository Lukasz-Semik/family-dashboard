import React, { useCallback, useState } from 'react';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { StyledErrorMessage } from './ErrorMessage.styled';

interface Props {
  isVisible?: boolean;
  message?: string;
}

export function ErrorMessage({ isVisible, message }: Props) {
  const anmiationRef = useRef(new Animated.Value(0));
  const [persitedMessage, setPersistedMessage] = useState<string>();

  const animateIn = useCallback(() => {
    setPersistedMessage(message);
    Animated.timing(anmiationRef.current, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [message]);

  const animateOut = useCallback(() => {
    Animated.timing(anmiationRef.current, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setPersistedMessage(undefined);
    });
  }, []);

  useEffect(() => {
    if (isVisible) {
      animateIn();
    } else {
      animateOut();
    }
  }, [isVisible, animateIn, animateOut]);

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
      {persitedMessage}
    </StyledErrorMessage>
  );
}
