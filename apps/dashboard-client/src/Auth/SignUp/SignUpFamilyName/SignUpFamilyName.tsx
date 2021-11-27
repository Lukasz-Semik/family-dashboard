import { FormattedMessage, useIntl } from 'react-intl';
import { useFormikContext } from 'formik';

import {
  FieldCheckbox,
  FieldInputStandard,
  validateFieldRequired,
} from '@family-dashboard/form-controls';

import { StyledCommonDescription } from '../SignUp.styled';
import { Values } from '../SignUp.types';
import {
  StyledCheckboxWrapper,
  StyledFieldWrapper,
} from './SignUpFamilyName.styled';

export function SignUpFamilyName() {
  const intl = useIntl();
  const { values, setFieldValue } = useFormikContext<Values>();

  return (
    <>
      <StyledCommonDescription>
        <FormattedMessage id="auth.signUp.familyNameDescription" />
      </StyledCommonDescription>

      <StyledFieldWrapper>
        <FieldInputStandard
          autoFocus
          name="familyName"
          label={<FormattedMessage id="fields.familyName.label" />}
          placeholder={intl.formatMessage({
            id: 'fields.familyName.placeholder',
          })}
          onChange={(e) => {
            if (!values.isLastNameDifferent) {
              setFieldValue('lastName', e.target.value);
            }
          }}
          validate={validateFieldRequired(
            <FormattedMessage id="errors.required" />
          )}
        />
      </StyledFieldWrapper>

      <StyledCheckboxWrapper>
        <FieldCheckbox
          name="isLastNameDifferent"
          label={<FormattedMessage id="auth.signUp.differentLastName" />}
          onChange={(e) => {
            if (!e.target.checked) {
              setFieldValue('lastName', values.familyName);
            }
          }}
        />
      </StyledCheckboxWrapper>

      <StyledFieldWrapper>
        <FieldInputStandard
          name="lastName"
          disabled={!values.isLastNameDifferent}
          label={<FormattedMessage id="fields.lastName.label" />}
          placeholder={intl.formatMessage({
            id: 'fields.lastName.placeholder',
          })}
          validate={
            !values.isLastNameDifferent
              ? undefined
              : validateFieldRequired(<FormattedMessage id="errors.required" />)
          }
        />
      </StyledFieldWrapper>
    </>
  );
}
