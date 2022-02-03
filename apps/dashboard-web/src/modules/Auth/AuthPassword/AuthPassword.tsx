import { FormattedMessage } from 'react-intl';

import { dsStyles } from '@family-dashboard/design-system';
import { validateFieldRequired, } from '@family-dashboard/fe-libs/field-validators'
import {
  FieldInputSecurity,
} from '@family-dashboard/web-libs/field-controls';

import {
  StyledAllTextsWrapper,
  StyledFieldWrapper,
} from './AuthPassword.styled';
import { AuthPasswordErrorText } from './AuthPasswordErrorText';

interface Props {
  password: string;
}

export function AuthPassword({ password }: Props) {
  return (
    <>
      <StyledFieldWrapper>
        <FieldInputSecurity
          autoFocus
          labelBgColor={dsStyles.colors.white}
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
          <AuthPasswordErrorText isValid={/[^a-zA-Z0-9]/.test(password)}>
            <FormattedMessage id="auth.signUp.passwordErrors.specialCharacter" />
          </AuthPasswordErrorText>

          <AuthPasswordErrorText isValid={password.length >= 8}>
            <FormattedMessage id="auth.signUp.passwordErrors.minCharacters" />
          </AuthPasswordErrorText>

          <AuthPasswordErrorText isValid={/[0-9]/.test(password)}>
            <FormattedMessage id="auth.signUp.passwordErrors.numericCharacter" />
          </AuthPasswordErrorText>

          <AuthPasswordErrorText
            isValid={/[A-Z]/.test(password) && /[a-z]/.test(password)}
          >
            <FormattedMessage id="auth.signUp.passwordErrors.upperAndLowerCharacter" />
          </AuthPasswordErrorText>
        </div>
      </StyledAllTextsWrapper>
    </>
  );
}
