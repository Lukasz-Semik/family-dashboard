import { useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
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
  showErrorToast,
} from '@family-dashboard/design-system';
import { CancelInvitation } from '@family-dashboard/fe-libs/api-graphql';
import {
  fdStoreFamilyActions,
  useSelectFamily,
} from '@family-dashboard/fe-libs/fd-store';
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
  const dispatch = useDispatch();
  const [selectedInvitation, setSelectedInvitation] =
    useState<CTInvitationDisplayData | null>(null);
  const [cancelInvitationMutation, { loading }] = useMutation<{
    cancelInvitation: boolean;
    email: string;
  }>(CancelInvitation, {
    onError: () => {
      showErrorToast('failed');
    },
  });

  const cancelInvitation = useCallback(
    async (email?: string) => {
      if (!email) {
        showErrorToast('EMAIL');
        return;
      }

      await cancelInvitationMutation({
        variables: {
          email,
        },
      });

      dispatch(
        fdStoreFamilyActions.setInvitations(
          family.invitations.filter((invitation) => invitation.email !== email)
        )
      );

      setSelectedInvitation(null);
    },
    [family.invitations, cancelInvitationMutation, dispatch]
  );

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
          isConfirmLoading={loading}
          isDisabled={loading}
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
