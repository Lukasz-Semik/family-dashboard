import React from 'react';
import { Animated, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Formik } from 'formik';

import {
  FieldInputStandard,
  LayoutBasic,
  WrapperIconFormControl,
} from '@family-dashboard/design-system-mobile-app';
import { messagesData } from '@family-dashboard/global/copies';
import { styledConstants } from '@family-dashboard/global/styled-constants';

import Icon from './icon-calendar.svg';
import {
  StyledDescription,
  StyledHeader,
  StyledSubHeader,
} from './SignIn.styled';

// TODO: exctract icons in similar way as it's done in FEDS
class MyIcon extends React.Component<SvgProps> {
  render() {
    return <Icon {...this.props} />;
  }
}
const AnimatedIcon = Animated.createAnimatedComponent(MyIcon);

export function SignIn() {
  return (
    <LayoutBasic>
      <View>
        <StyledHeader>Family Dashboard</StyledHeader>
        <StyledSubHeader>{messagesData.auth.signIn.title}</StyledSubHeader>

        <StyledDescription>
          {messagesData.auth.signIn.description}
        </StyledDescription>

        <Formik
          initialValues={{ email: '' }}
          onSubmit={(values) => console.log(values)}
        >
          {() => {
            return (
              <>
                <FieldInputStandard
                  label="Email"
                  name="email"
                  placeholder="Your email"
                  validate={(v) => {
                    if (!v) {
                      return 'Required';
                    }
                    return undefined;
                  }}
                  renderLeftControls={({ isFocused, hasError }) => (
                    <WrapperIconFormControl
                      shouldRunAnimation={isFocused}
                      startColor={
                        hasError
                          ? styledConstants.colors.red1
                          : styledConstants.colors.violet4
                      }
                      renderIcon={({ color }) => (
                        <AnimatedIcon width={20} height={20} color={color} />
                      )}
                    />
                  )}
                />
                <FieldInputStandard label="Password" name="password" />
              </>
            );
          }}
        </Formik>
      </View>
    </LayoutBasic>
  );
}
