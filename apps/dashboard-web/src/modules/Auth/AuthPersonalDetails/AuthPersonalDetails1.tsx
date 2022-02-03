import { FormattedMessage, useIntl } from 'react-intl';

import { dsStyles } from '@family-dashboard/design-system';
import { validateFieldRequired } from '@family-dashboard/fe-libs/field-validators';
import { FieldInputStandard } from '@family-dashboard/web-libs/field-controls';

import { StyledCommonDescription } from '../Auth.styled';
import { StyledFieldWrapper } from './AuthPersonalDetails.styled';

interface Props {
  description: React.ReactNode;
}

export function AuthPersonalDetails1({ description }: Props) {
  const intl = useIntl();

  return (
    <>
      <StyledCommonDescription>{description}</StyledCommonDescription>

      <StyledFieldWrapper>
        <FieldInputStandard
          autoFocus
          name="firstName"
          labelBgColor={dsStyles.colors.white}
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
          labelBgColor={dsStyles.colors.white}
          label={<FormattedMessage id="fields.middleName.label" />}
          placeholder={intl.formatMessage({
            id: 'fields.middleName.placeholder',
          })}
        />
      </StyledFieldWrapper>
    </>
  );
}
