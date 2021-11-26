import { FormattedMessage, useIntl } from 'react-intl';
import { Formik } from 'formik';

import {
  ButtonStandard,
  IconEmail,
  WrapperIconFormControl,
} from '@family-dashboard/design-system';
import {
  combineFieldValidators,
  FieldInputSecurity,
  FieldInputStandard,
  validateFieldEmail,
  validateFieldRequired,
} from '@family-dashboard/form-controls';

import { routes } from '../../../routing/routes';
import {
  StyledButtonWrapper,
  StyledFormTitle,
  StyledHeader,
  StyledHeaderTitle,
  StyledLink,
  StyledLinkWrapper,
  StyledWrapper,
} from '../Auth.styled';
import {
  StyledDescription,
  StyledEmailFieldWrapper,
  StyledForm,
  StyledFormTitleWrapper,
  StyledInnerWrapper,
  StyledPasswordFieldWrapper,
  StyledSignUpLink,
} from './SignIn.styled';
import { useSignIn } from './useSignIn';

interface Values {
  email: string;
  password: string;
}

export function SignIn() {
  const { onSubmit, isLoading } = useSignIn();
  const intl = useIntl();

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledHeaderTitle>Family Dashboard</StyledHeaderTitle>
      </StyledHeader>

      <StyledInnerWrapper>
        <StyledSignUpLink to={routes.auth.signUpRoute()}>
          <FormattedMessage id="auth.signUp.title" />
        </StyledSignUpLink>

        <Formik<Values>
          initialValues={{ email: '', password: '' }}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <StyledFormTitleWrapper>
                <StyledFormTitle>
                  <FormattedMessage id="auth.signIn.title" />
                </StyledFormTitle>
              </StyledFormTitleWrapper>

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
                  validate={combineFieldValidators(
                    validateFieldRequired(
                      <FormattedMessage id="errors.required" />
                    ),
                    validateFieldEmail(<FormattedMessage id="errors.email" />)
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
                  validate={validateFieldRequired(
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
                <ButtonStandard isLoading={isLoading}>
                  <FormattedMessage id="auth.signIn.title" />
                </ButtonStandard>
              </StyledButtonWrapper>
              <StyledLinkWrapper>
                <StyledLink to="">
                  <FormattedMessage id="auth.signIn.forgotPassword" />
                </StyledLink>
              </StyledLinkWrapper>
            </StyledForm>
          )}
        </Formik>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
}
