import { Formik } from 'formik';

import {
  ButtonStandard,
  FadeInWrapper,
  IconEmail,
  WrapperIconFormControl,
} from '@family-dashboard/design-system';
import {
  FieldInputSecurity,
  FieldInputStandard,
} from '@family-dashboard/form-controls';

import {
  combineValidators,
  validateEmail,
  validateRequired,
} from '../../../validators/validators';
import {
  StyledButtonWrapper,
  StyledDescription,
  StyledEmailFieldWrapper,
  StyledForgotPasswordLink,
  StyledForgotPasswordLinkWrapper,
  StyledForm,
  StyledFormTitle,
  StyledHeader,
  StyledHeaderTitle,
  StyledInnerWrapper,
  StyledPasswordFieldWrapper,
  StyledSignUpLink,
  StyledWrapper,
} from './SignIn.styled';
import { useSignIn } from './useSignIn';

interface Values {
  email: string;
  password: string;
}

export function SignIn() {
  const { onSubmit } = useSignIn();

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledHeaderTitle>Family Dashboard</StyledHeaderTitle>
      </StyledHeader>

      <FadeInWrapper>
        <StyledInnerWrapper>
          <StyledSignUpLink to="">Sign Up</StyledSignUpLink>

          <Formik<Values>
            initialValues={{ email: '', password: '' }}
            onSubmit={onSubmit}
          >
            {({ handleSubmit }) => (
              <StyledForm onSubmit={handleSubmit}>
                <StyledFormTitle>Sign In</StyledFormTitle>

                <StyledDescription>
                  Family dashboard app - the best way to organize your family
                  stuff, save time and spent it on whatever you want to.
                </StyledDescription>

                <StyledEmailFieldWrapper>
                  <FieldInputStandard
                    autoFocus
                    name="email"
                    label="Email"
                    placeholder="Your eamil address"
                    validate={combineValidators(
                      validateRequired('required'),
                      validateEmail('email')
                    )}
                    renderLeftControls={(renderProps) => (
                      <WrapperIconFormControl {...renderProps}>
                        <IconEmail />
                      </WrapperIconFormControl>
                    )}
                  />
                </StyledEmailFieldWrapper>

                <StyledPasswordFieldWrapper>
                  <FieldInputSecurity
                    name="password"
                    validate={(value: string) =>
                      !value ? 'Required' : undefined
                    }
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
      </FadeInWrapper>
    </StyledWrapper>
  );
}
