import { useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';

import { showErrorToast } from '@family-dashboard/design-system';
import { fdRoutes } from '@family-dashboard/global/const';

import { ConfirmInvitedUserStep, Values } from '../ConfirmInvitedUser.types';
import { useConfirmUserInvitation } from './useConfirmUserInvitation';

export function useConfirmInvitedUser() {
  const history = useHistory();

  const [currentStep, setCurrentStep] = useState(
    ConfirmInvitedUserStep.InitialStep
  );

  const { isLoadingUserInvitation, confirmUserInvitation } =
    useConfirmUserInvitation({
      goToNextStep: () => setCurrentStep(ConfirmInvitedUserStep.FinalStep),
    });

  const onSubmit = useCallback(
    (values: Values, { resetForm }) => {
      switch (currentStep) {
        case ConfirmInvitedUserStep.InitialStep:
          setCurrentStep(ConfirmInvitedUserStep.PersonalDetails1);
          resetForm({ values });
          return;
        case ConfirmInvitedUserStep.PersonalDetails1:
          setCurrentStep(ConfirmInvitedUserStep.PersonalDetails2);
          resetForm({ values });
          return;
        case ConfirmInvitedUserStep.PersonalDetails2:
          setCurrentStep(ConfirmInvitedUserStep.Password);
          resetForm({ values });
          return;
        case ConfirmInvitedUserStep.Password:
          confirmUserInvitation(values);
          return;
        case ConfirmInvitedUserStep.FinalStep:
          history.push(fdRoutes.dashboard.dashboardRoute.path);
          return;
        default:
          showErrorToast(<FormattedMessage id="errors.somethingWentWrong" />);
          return;
      }
    },
    [currentStep, confirmUserInvitation, history]
  );

  return {
    onSubmit,
    currentStep,
    isLoadingUserInvitation,
  };
}
