import React from 'react';
import { Animated } from 'react-native';
import { SvgProps } from 'react-native-svg';

import IconEmailBase from './assets/icon-email.svg';
import IconSecurityBase from './assets/icon-security.svg';

class IconEmailParsed extends React.Component<SvgProps> {
  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <IconEmailBase {...this.props} />;
  }
}
export const IconEmail = Animated.createAnimatedComponent(IconEmailParsed);

class IconSecurityParsed extends React.Component<SvgProps> {
  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <IconSecurityBase {...this.props} />;
  }
}
export const IconSecurity =
  Animated.createAnimatedComponent(IconSecurityParsed);
