import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

import {
  ButtonStandard,
  ButtonStandardText,
  FieldInputStandard,
  IconEmail,
  IconSecurity,
  LayoutBasic,
  LoaderFullScreen,
  WrapperIconFormControl,
} from '@family-dashboard/design-system-mobile';
import {
  combineFieldValidators,
  validateFieldEmail,
  validateFieldRequired,
} from '@family-dashboard/fe-libs/field-validators';
import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';
import { copies } from '@family-dashboard/global/copies';

import { useSignIn, Values } from './_hooks/useSignIn';
import {
  StyledDescription,
  StyledHeader,
  StyledSubHeader,
} from './SignIn.styled';

export function SignIn() {
  const { onSubmit, isLoading } = useSignIn();

  return (
    <LayoutBasic>
      <Formik<Values>
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmit}
      >
        {({ submitForm }) => {
          return (
            <>
              <View>
                <StyledHeader>Family Dashboard</StyledHeader>
                <StyledSubHeader>{copies.auth.signIn.title}</StyledSubHeader>

                <StyledDescription>
                  {copies.auth.signIn.description}
                </StyledDescription>
                <LoaderFullScreen isVisible={isLoading} />
                <View style={{ marginBottom: 32 }}>
                  <FieldInputStandard
                    label={copies.fields.email.label}
                    name="email"
                    placeholder={copies.fields.email.placeholder}
                    validate={combineFieldValidators(
                      validateFieldRequired(copies.errors.required),
                      validateFieldEmail(copies.errors.email)
                    )}
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
                  label={copies.fields.password.label}
                  name="password"
                  secureTextEntry
                  placeholder={copies.fields.password.placeholder}
                  textContentType="password"
                  validate={validateFieldRequired(copies.errors.required)}
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

              <ButtonStandard onPressIn={submitForm}>
                <ButtonStandardText text={copies.auth.signIn.title} />
              </ButtonStandard>
            </>
          );
        }}
      </Formik>
    </LayoutBasic>
  );
}
