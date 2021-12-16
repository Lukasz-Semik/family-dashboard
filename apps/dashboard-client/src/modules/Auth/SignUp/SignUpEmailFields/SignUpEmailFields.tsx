import { FormattedMessage, useIntl } from 'react-intl';

import {
  IconEmail,
  WrapperIconFormControl,
} from '@family-dashboard/design-system';
import {
  combineFieldValidators,
  FieldCheckbox,
  FieldInputStandard,
  validateFieldEmail,
  validateFieldRequired,
} from '@family-dashboard/fe-libs/field-controls';

import {
  StyledDescription,
  StyledEmailFieldWrapper,
} from './SignUpEmailFields.styled';

export function SignUpEmailFields() {
  const intl = useIntl();

  return (
    <>
      <StyledDescription>
        <FormattedMessage id="auth.signUp.description" />
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
            validateFieldRequired(<FormattedMessage id="errors.required" />),
            validateFieldEmail(<FormattedMessage id="errors.email" />)
          )}
          renderLeftControls={(renderProps) => (
            <WrapperIconFormControl {...renderProps}>
              <IconEmail />
            </WrapperIconFormControl>
          )}
        />
      </StyledEmailFieldWrapper>

      <FieldCheckbox
        name="isConsentGiven"
        label={<FormattedMessage id="auth.signUp.consent" />}
        validate={validateFieldRequired(
          <FormattedMessage id="errors.required" />
        )}
      />
    </>
  );
}
