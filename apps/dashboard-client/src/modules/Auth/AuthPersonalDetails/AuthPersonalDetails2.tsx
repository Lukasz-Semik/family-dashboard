import { FormattedMessage, useIntl } from 'react-intl';

import { dsStyles } from '@family-dashboard/design-system';
import {
  combineFieldValidators,
  FieldInputMasked,
  FieldSelect,
  validateFieldDateValid,
  validateFieldRequired,
} from '@family-dashboard/fe-libs/field-controls';
import { CTGender } from '@family-dashboard/global/types';

import { StyledCommonDescription } from '../Auth.styled';
import { StyledFieldWrapper } from './AuthPersonalDetails.styled';

interface Props {
  description: React.ReactNode;
}

export function AuthPersonalDetails2({ description }: Props) {
  const intl = useIntl();

  return (
    <>
      <StyledCommonDescription>{description}</StyledCommonDescription>

      <StyledFieldWrapper>
        <FieldInputMasked
          autoFocus
          name="dob"
          labelBgColor={dsStyles.colors.white}
          label={<FormattedMessage id="fields.dateOfBirth.label" />}
          placeholder="DD-MM-YYYY"
          validate={combineFieldValidators(
            validateFieldRequired(<FormattedMessage id="errors.required" />),
            validateFieldDateValid(<FormattedMessage id="errors.invalidDate" />)
          )}
        />
      </StyledFieldWrapper>

      <FieldSelect
        labelBgColor={dsStyles.colors.white}
        label={<FormattedMessage id="fields.gender.label" />}
        name="gender"
        triggerPlaceholder={<FormattedMessage id="shared.select" />}
        validate={validateFieldRequired(
          <FormattedMessage id="errors.required" />
        )}
        items={[
          {
            value: CTGender.Male,
            label: intl.formatMessage({ id: 'fields.gender.items.male' }),
          },
          {
            value: CTGender.Female,
            label: intl.formatMessage({ id: 'fields.gender.items.female' }),
          },
          {
            value: CTGender.Other,
            label: intl.formatMessage({ id: 'fields.gender.items.other' }),
          },
        ]}
      />
    </>
  );
}