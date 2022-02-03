import { FormattedMessage, useIntl } from 'react-intl';

import {
  dsStyles,
  IconEmail,
  WrapperIconFormControl,
} from '@family-dashboard/design-system';
import {
  combineFieldValidators,
  validateFieldEmail,
  validateFieldRequired,
} from '@family-dashboard/fe-libs/field-validators';
import {
  FieldCheckbox,
  FieldInputStandard,
} from '@family-dashboard/web-libs/field-controls';

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
          labelBgColor={dsStyles.colors.white}
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
