import { FormattedMessage, useIntl } from 'react-intl';

import { dsStyles } from '@family-dashboard/design-system';
import {
  combineFieldValidators,
  validateFieldDateValid,
  validateFieldRequired,
} from '@family-dashboard/fe-libs/field-validators';
import { GTGender } from '@family-dashboard/global/types';
import {
  FieldInputMasked,
  FieldSelect,
} from '@family-dashboard/web-libs/field-controls';

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
            value: GTGender.Male,
            label: intl.formatMessage({ id: 'fields.gender.items.male' }),
          },
          {
            value: GTGender.Female,
            label: intl.formatMessage({ id: 'fields.gender.items.female' }),
          },
          {
            value: GTGender.Other,
            label: intl.formatMessage({ id: 'fields.gender.items.other' }),
          },
        ]}
      />
    </>
  );
}
