import React from 'react';
import { Animated } from 'react-native';
import { SvgProps } from 'react-native-svg';

import IconBackArrowBase from './assets/icon-back-arrow.svg';
import IconBellBase from './assets/icon-bell.svg';
import IconClockBase from './assets/icon-clock.svg';
import IconEmailBase from './assets/icon-email.svg';
import IconHamburgerBase from './assets/icon-hamburger.svg';
import IconMessageBase from './assets/icon-message.svg';
import IconPlusCircleBase from './assets/icon-plus-circle.svg';
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

class IconHamburgerParsed extends React.Component<SvgProps> {
  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <IconHamburgerBase {...this.props} />;
  }
}
export const IconHamburger =
  Animated.createAnimatedComponent(IconHamburgerParsed);

class IconBackArrowParsed extends React.Component<SvgProps> {
  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <IconBackArrowBase {...this.props} />;
  }
}
export const IconBackArrow =
  Animated.createAnimatedComponent(IconBackArrowParsed);

class IconMessageParsed extends React.Component<SvgProps> {
  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <IconMessageBase {...this.props} />;
  }
}
export const IconMessage = Animated.createAnimatedComponent(IconMessageParsed);

class IconClockParsed extends React.Component<SvgProps> {
  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <IconClockBase {...this.props} />;
  }
}
export const IconClock = Animated.createAnimatedComponent(IconClockParsed);
class IconPlusCircleParsed extends React.Component<SvgProps> {
  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <IconPlusCircleBase {...this.props} />;
  }
}
export const IconPlusCircle =
  Animated.createAnimatedComponent(IconPlusCircleParsed);

class IconBellParsed extends React.Component<SvgProps> {
  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <IconBellBase {...this.props} />;
  }
}
export const IconBell = Animated.createAnimatedComponent(IconBellParsed);
