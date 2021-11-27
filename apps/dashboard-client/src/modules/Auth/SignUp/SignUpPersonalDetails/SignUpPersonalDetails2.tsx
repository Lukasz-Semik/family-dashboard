import { FormattedMessage } from 'react-intl';

import {
  FieldInputMasked,
  validateFieldRequired,
} from '@family-dashboard/form-controls';

import { StyledCommonDescription } from '../SignUp.styled';

export function SignUpPersonalDetails2() {
  return (
    <>
      <StyledCommonDescription>
        <FormattedMessage id="auth.signUp.personalDetails" />
      </StyledCommonDescription>

      <FieldInputMasked
        autoFocus
        name="test"
        label="dasdas"
        placeholder="dd-mm-yyyy"
        validate={validateFieldRequired(
          <FormattedMessage id="errors.required" />
        )}
      />
    </>
  );
}
