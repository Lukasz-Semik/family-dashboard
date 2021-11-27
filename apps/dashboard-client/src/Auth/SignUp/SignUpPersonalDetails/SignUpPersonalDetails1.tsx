import { FormattedMessage, useIntl } from 'react-intl';

import {
  FieldInputStandard,
  validateFieldRequired,
} from '@family-dashboard/form-controls';

import { StyledCommonDescription } from '../SignUp.styled';
import { StyledFieldWrapper } from './SignUpPersonalDetails.styled';

export function SignUpPersonalDetails1() {
  const intl = useIntl();

  return (
    <>
      <StyledCommonDescription>
        <FormattedMessage id="auth.signUp.personalDetails" />
      </StyledCommonDescription>

      <StyledFieldWrapper>
        <FieldInputStandard
          autoFocus
          name="firstName"
          label={<FormattedMessage id="fields.firstName.label" />}
          placeholder={intl.formatMessage({
            id: 'fields.firstName.placeholder',
          })}
          validate={validateFieldRequired(
            <FormattedMessage id="errors.required" />
          )}
        />
      </StyledFieldWrapper>

      <StyledFieldWrapper>
        <FieldInputStandard
          name="middleName"
          label={<FormattedMessage id="fields.middleName.label" />}
          placeholder={intl.formatMessage({
            id: 'fields.middleName.placeholder',
          })}
        />
      </StyledFieldWrapper>
    </>
  );
}
