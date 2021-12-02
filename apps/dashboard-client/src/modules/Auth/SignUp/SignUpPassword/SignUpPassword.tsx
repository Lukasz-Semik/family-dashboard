import { FormattedMessage } from 'react-intl';
import { useFormikContext } from 'formik';

import {
  FieldInputSecurity,
  validateFieldRequired,
} from '@family-dashboard/form-controls';

import { Values } from '../SignUp.types';
import {
  StyledAllTextsWrapper,
  StyledFieldWrapper,
} from './SignUpPassword.styled';
import { SignUpPasswordErrorText } from './SignUpPasswordErrorText';

export function SignUpPassword() {
  const { values } = useFormikContext<Values>();

  return (
    <>
      <StyledFieldWrapper>
        <FieldInputSecurity
          autoFocus
          name="password"
          validate={validateFieldRequired(
            <FormattedMessage id="errors.required" />
          )}
          showText={<FormattedMessage id="shared.show" />}
          hideText={<FormattedMessage id="shared.hide" />}
          label={<FormattedMessage id="fields.password.label" />}
        />
      </StyledFieldWrapper>

      <StyledAllTextsWrapper>
        <div>
          <SignUpPasswordErrorText
            isValid={/[^a-zA-Z0-9]/.test(values.password)}
          >
            <FormattedMessage id="auth.signUp.passwordErrors.specialCharacter" />
          </SignUpPasswordErrorText>

          <SignUpPasswordErrorText isValid={values.password.length >= 8}>
            <FormattedMessage id="auth.signUp.passwordErrors.minCharacters" />
          </SignUpPasswordErrorText>

          <SignUpPasswordErrorText isValid={/[0-9]/.test(values.password)}>
            <FormattedMessage id="auth.signUp.passwordErrors.numericCharacter" />
          </SignUpPasswordErrorText>

          <SignUpPasswordErrorText
            isValid={
              /[A-Z]/.test(values.password) && /[a-z]/.test(values.password)
            }
          >
            <FormattedMessage id="auth.signUp.passwordErrors.upperAndLowerCharacter" />
          </SignUpPasswordErrorText>
        </div>
      </StyledAllTextsWrapper>
    </>
  );
}
