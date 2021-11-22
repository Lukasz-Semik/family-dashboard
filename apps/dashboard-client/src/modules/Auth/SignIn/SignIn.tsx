import {
  ButtonStandard,
  IconEmail,
  InputSecurity,
  InputStandard,
  WrapperIconFormControl,
} from '@family-dashboard/design-system';
import { Formik } from 'formik';

import {
  StyledButtonWrapper,
  StyledDescription,
  StyledEmailFieldWrapper,
  StyledForgotPasswordLink,
  StyledForgotPasswordLinkWrapper,
  StyledForm,
  StyledHeader,
  StyledHeaderTitle,
  StyledInnerWrapper,
  StyledPasswordFieldWrapper,
  StyledSignUpLink,
  StyledTitle,
  StyledWrapper,
} from './SignIn.styled';

export function SignIn() {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledHeaderTitle>Family Dashboard</StyledHeaderTitle>
      </StyledHeader>

      <StyledInnerWrapper>
        <StyledSignUpLink to="">Sign Up</StyledSignUpLink>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(val) => console.log(val)}
        >
          {({ handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <StyledTitle>Sign In</StyledTitle>

              <StyledDescription>
                Family dashboard app - the best way to organize your family
                stuff, save time and spent it on whatever you want to.
              </StyledDescription>

              <StyledEmailFieldWrapper>
                <InputStandard
                  label="Email"
                  placeholder="Your eamil address"
                  autoFocus
                  renderLeftControls={(renderProps) => (
                    <WrapperIconFormControl {...renderProps}>
                      <IconEmail />
                    </WrapperIconFormControl>
                  )}
                />
              </StyledEmailFieldWrapper>

              <StyledPasswordFieldWrapper>
                <InputSecurity
                  showText="show"
                  hideText="hide"
                  label="Password"
                  placeholder="Your secret password"
                />
              </StyledPasswordFieldWrapper>

              <StyledButtonWrapper>
                <ButtonStandard>Sign In</ButtonStandard>
              </StyledButtonWrapper>
              <StyledForgotPasswordLinkWrapper>
                <StyledForgotPasswordLink to="">
                  Forgot your password?
                </StyledForgotPasswordLink>
              </StyledForgotPasswordLinkWrapper>
            </StyledForm>
          )}
        </Formik>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
}
