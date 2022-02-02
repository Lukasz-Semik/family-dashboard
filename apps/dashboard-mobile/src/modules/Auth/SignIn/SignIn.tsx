import React from 'react';
import { Text, View } from 'react-native';
import { Formik } from 'formik';

import {
  ButtonStandard,
  ButtonStandardText,
  FieldInputStandard,
  IconEmail,
  IconSecurity,
  LayoutBasic,
  WrapperIconFormControl,
} from '@family-dashboard/design-system-mobile-app';
import { messages, messagesData } from '@family-dashboard/global/copies';
import { styledConstants } from '@family-dashboard/global/styled-constants';

import {
  StyledDescription,
  StyledHeader,
  StyledSubHeader,
} from './SignIn.styled';

export function SignIn() {
  return (
    <LayoutBasic>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {() => {
          return (
            <>
              <View>
                <StyledHeader>Family Dashboard</StyledHeader>
                <StyledSubHeader>
                  {messagesData.auth.signIn.title}
                </StyledSubHeader>

                <StyledDescription>
                  {messagesData.auth.signIn.description}
                </StyledDescription>

                <View style={{ marginBottom: 32 }}>
                  <FieldInputStandard
                    label={messagesData.fields.email.label}
                    name="email"
                    placeholder={messagesData.fields.email.placeholder}
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
                          <IconEmail width={20} height={20} color={color} />
                        )}
                      />
                    )}
                  />
                </View>

                <FieldInputStandard
                  label={messagesData.fields.password.label}
                  name="password"
                  secureTextEntry
                  placeholder={messagesData.fields.password.placeholder}
                  textContentType="password"
                  renderLeftControls={({ isFocused, hasError }) => (
                    <WrapperIconFormControl
                      shouldRunAnimation={isFocused}
                      startColor={
                        hasError
                          ? styledConstants.colors.red1
                          : styledConstants.colors.violet4
                      }
                      renderIcon={({ color }) => (
                        <IconSecurity width={20} height={20} color={color} />
                      )}
                    />
                  )}
                />
              </View>
              <ButtonStandard>
                <ButtonStandardText text={messagesData.auth.signIn.title} />
              </ButtonStandard>
            </>
          );
        }}
      </Formik>
    </LayoutBasic>
  );
}
