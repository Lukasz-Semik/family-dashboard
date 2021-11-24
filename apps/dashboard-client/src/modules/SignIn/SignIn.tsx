import { FormattedMessage, useIntl } from 'react-intl';
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

import { routes } from '../../routing/routes';
import {
  combineValidators,
  validateEmail,
  validateRequired,
} from '../../validators/validators';
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
  const intl = useIntl();

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledHeaderTitle>Family Dashboard</StyledHeaderTitle>
      </StyledHeader>

      <FadeInWrapper>
        <StyledInnerWrapper>
          <StyledSignUpLink to={routes.signUpRoute()}>
            <FormattedMessage id="auth.signUp.title" />
          </StyledSignUpLink>

          <Formik<Values>
            initialValues={{ email: '', password: '' }}
            onSubmit={onSubmit}
          >
            {({ handleSubmit }) => (
              <StyledForm onSubmit={handleSubmit}>
                <StyledFormTitle>
                  <FormattedMessage id="auth.signIn.title" />
                </StyledFormTitle>

                <StyledDescription>
                  <FormattedMessage id="auth.signIn.description" />
                </StyledDescription>

                <StyledEmailFieldWrapper>
                  <FieldInputStandard
                    autoFocus
                    name="email"
                    label={<FormattedMessage id="fields.email.label" />}
                    placeholder={intl.formatMessage({
                      id: 'fields.email.label',
                    })}
                    validate={combineValidators(
                      validateRequired(
                        <FormattedMessage id="errors.required" />
                      ),
                      validateEmail(<FormattedMessage id="errors.email" />)
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
                    validate={validateRequired(
                      <FormattedMessage id="errors.required" />
                    )}
                    showText={<FormattedMessage id="shared.show" />}
                    hideText={<FormattedMessage id="shared.hide" />}
                    label={<FormattedMessage id="fields.password.label" />}
                    placeholder={intl.formatMessage({
                      id: 'fields.password.placeholder',
                    })}
                  />
                </StyledPasswordFieldWrapper>

                <StyledButtonWrapper>
                  <ButtonStandard>
                    <FormattedMessage id="auth.signIn.title" />
                  </ButtonStandard>
                </StyledButtonWrapper>
                <StyledForgotPasswordLinkWrapper>
                  <StyledForgotPasswordLink to="">
                    <FormattedMessage id="auth.signIn.forgotPassword" />
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
