import { FormattedMessage, useIntl } from 'react-intl';

import {
  FieldInputMasked,
  // FieldInputStandard,
  validateFieldRequired,
} from '@family-dashboard/form-controls';

import { StyledCommonDescription } from '../SignUp.styled';
import { StyledFieldWrapper } from './SignUpPersonalDetails.styled';

export function SignUpPersonalDetails2() {
  const intl = useIntl();

  return (
    <>
      <StyledCommonDescription>
        <FormattedMessage id="auth.signUp.personalDetails" />
      </StyledCommonDescription>

      <FieldInputMasked
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
