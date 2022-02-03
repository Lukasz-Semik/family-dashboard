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
  Modal,
  ModalButtonsGroup,
  ModalText,
  ModalTitle,
} from '@family-dashboard/design-system';
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
import { useFamilySettingsInvitationsList } from './useFamilySettingsInvitationsList';

export function FamilySettingsInvitationsList() {
  const {
    isLoading,
    family,
    setSelectedInvitation,
    selectedInvitation,
    cancelInvitation,
  } = useFamilySettingsInvitationsList();

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
        renderItem={(invitation) => (
          <ListStandardItem key={invitation.email}>
            {() => (
              <>
                <ListStandardItemColumn width="20%">
                  <StyledContentWithIconWrapper>
                    <StyledIconWrapper>
                      <IconProgress />
                    </StyledIconWrapper>
                    {invitation.firstName}
                  </StyledContentWithIconWrapper>
                </ListStandardItemColumn>

                <ListStandardItemColumn width="40%">
                  {invitation.email}
                </ListStandardItemColumn>

                <ListStandardItemColumn width="20%">
                  <StyledDescriptionColumnContent isMarked={false}>
                    <StyledDescriptionColumnLabel>
                      <FormattedMessage id="shared.validTo" />:{' '}
                    </StyledDescriptionColumnLabel>
                    {dayjs(invitation.validTo).format(FULL_DATE_FORMAT)}
                  </StyledDescriptionColumnContent>
                </ListStandardItemColumn>

                <StyledCancelButton
                  onClick={() => setSelectedInvitation(invitation)}
                >
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

      <Modal
        isOpen={Boolean(selectedInvitation)}
        closeModal={() => setSelectedInvitation(null)}
      >
        <ModalTitle>
          <FormattedMessage id="auth.signUp.confirmEmail.sendNewCode" />
        </ModalTitle>
        <ModalText>
          <FormattedMessage id="auth.signUp.confirmEmail.sendNewCodeDescription" />
        </ModalText>

        <ModalButtonsGroup
          isConfirmLoading={isLoading}
          isDisabled={isLoading}
          onCancelButtonClick={() => setSelectedInvitation(null)}
          onConfirmButtonClick={() =>
            cancelInvitation(selectedInvitation?.email)
          }
          cancelContent={<FormattedMessage id="shared.cancel" />}
          confirmContent={<FormattedMessage id="shared.confirm" />}
        />
      </Modal>
    </>
  );
}
