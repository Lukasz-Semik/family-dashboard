import { FormattedMessage, useIntl } from 'react-intl';

import { dsStyles } from '@family-dashboard/design-system';
import { validateFieldRequired } from '@family-dashboard/fe-libs/field-validators';
import { CTInvitationUserPersonalDetailsData } from '@family-dashboard/global/types';
import { FieldInputStandard } from '@family-dashboard/web-libs/field-controls';

import { StyledDescription } from './ConfirmInvitedUserInitialStep.styled';

interface Props {
  invitationData: CTInvitationUserPersonalDetailsData;
}

export function ConfirmInvitedUserInitialStep({ invitationData }: Props) {
  const intl = useIntl();

  return (
    <>
      <StyledDescription>
        <FormattedMessage
          id="auth.confirmInvitedUser.description"
          values={{
            familyName: invitationData.familyName,
            inviterName: invitationData.inviterName,
          }}
        />
      </StyledDescription>

      <FieldInputStandard
        autoFocus
        name="lastName"
        labelBgColor={dsStyles.colors.white}
        label={<FormattedMessage id="fields.lastName.label" />}
        placeholder={intl.formatMessage({
          id: 'fields.lastName.placeholder',
        })}
        validate={validateFieldRequired(
          <FormattedMessage id="errors.required" />
        )}
      />
    </>
  );
}