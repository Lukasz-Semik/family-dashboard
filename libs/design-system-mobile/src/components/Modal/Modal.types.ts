import React from 'react';
import { ModalProps as ModalBaseProps } from 'react-native-modal';

export interface ModalProps
  extends Partial<Omit<ModalBaseProps, 'animationIn' | 'animationOut'>> {
  children: React.ReactNode;
}
