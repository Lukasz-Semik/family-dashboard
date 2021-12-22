import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';

import {
  IconProgress,
  IconTrash,
  ListStandard,
  ListStandardHeaderColumn,
  ListStandardHeadersWrapper,
  ListStandardItem,
  ListStandardItemColumn,
  ListStandardNoItemsMessage,
} from '@family-dashboard/design-system';
import { useSelectFamily } from '@family-dashboard/fe-libs/fd-store';
import { FULL_DATE_FORMAT } from '@family-dashboard/global/const';
import { CTInvitationDisplayData } from '@family-dashboard/global/types';

import {
  StyledContentWithIconWrapper,
  StyledDescriptionColumnContent,
  StyledDescriptionColumnLabel,
  StyledIconWrapper,
  StyledListTitle,
} from '../FamilySettingsPage.styled';
import {
  StyledCancelButton,
  StyledIconCancelWrapper,
} from './FamilySettingsInvitationsList.styled';

export function FamilySettingsInvitationsList() {
  const family = useSelectFamily();
  console.log(family);
  return (
    <>
      <StyledListTitle>
        <FormattedMessage id="familySettings.pendingInvitations" />
      </StyledListTitle>

      <ListStandard<CTInvitationDisplayData>
        items={family.invitations}
        renderHeaders={() => (
          <ListStandardHeadersWrapper>
            <ListStandardHeaderColumn width="20%">
              <FormattedMessage id="shared.name" />
            </ListStandardHeaderColumn>
            <ListStandardHeaderColumn width="40%">
              <FormattedMessage id="fields.email.label" />
            </ListStandardHeaderColumn>
            <ListStandardHeaderColumn width="20%">
              <FormattedMessage id="shared.validTo" />
            </ListStandardHeaderColumn>
          </ListStandardHeadersWrapper>
        )}
        renderItem={(item) => (
          <ListStandardItem key={item.email}>
            {() => (
              <>
                <ListStandardItemColumn width="20%">
                  <StyledContentWithIconWrapper>
                    <StyledIconWrapper>
                      <IconProgress />
                    </StyledIconWrapper>
                    {item.firstName}
                  </StyledContentWithIconWrapper>
                </ListStandardItemColumn>

                <ListStandardItemColumn width="40%">
                  {item.email}
                </ListStandardItemColumn>

                <ListStandardItemColumn width="20%">
                  <StyledDescriptionColumnContent isMarked={false}>
                    <StyledDescriptionColumnLabel>
                      <FormattedMessage id="shared.validTo" />:{' '}
                    </StyledDescriptionColumnLabel>
                    {dayjs(item.validTo).format(FULL_DATE_FORMAT)}
                  </StyledDescriptionColumnContent>
                </ListStandardItemColumn>

                <StyledCancelButton>
                  <StyledIconCancelWrapper>
                    <IconTrash width="14px" height="18px" />
                  </StyledIconCancelWrapper>
                  <FormattedMessage id="shared.cancel" />
                </StyledCancelButton>
              </>
            )}
          </ListStandardItem>
        )}
        renderNoItemsMessage={() => (
          <ListStandardNoItemsMessage>
            <FormattedMessage id="shared.emptyList" />
          </ListStandardNoItemsMessage>
        )}
      />
    </>
  );
}
