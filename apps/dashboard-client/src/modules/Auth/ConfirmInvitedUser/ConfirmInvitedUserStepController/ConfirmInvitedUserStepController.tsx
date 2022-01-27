import { FormattedMessage } from 'react-intl';
import { useFormikContext } from 'formik';

import { CTInvitationUserPersonalDetailsData } from '@family-dashboard/global/types';

import { AuthPassword } from '../../AuthPassword/AuthPassword';
import { AuthPersonalDetails1 } from '../../AuthPersonalDetails/AuthPersonalDetails1';
import { AuthPersonalDetails2 } from '../../AuthPersonalDetails/AuthPersonalDetails2';
import { ConfirmInvitedUserStep, Values } from '../ConfirmInvitedUser.types';
import { ConfirmInvitedUserFinalStep } from '../ConfirmInvitedUserFinalStep/ConfirmInvitedUserFinalStep';
import { ConfirmInvitedUserInitialStep } from '../ConfirmInvitedUserInitialStep/ConfirmInvitedUserInitialStep';

interface Props {
  currentStep: ConfirmInvitedUserStep;
  invitationData: CTInvitationUserPersonalDetailsData;
}

export function ConfirmInvitedUserStepController({
  currentStep,
  invitationData,
}: Props) {
  const { values } = useFormikContext<Values>();

  switch (currentStep) {
    case ConfirmInvitedUserStep.InitialStep:
      return <ConfirmInvitedUserInitialStep invitationData={invitationData} />;
    case ConfirmInvitedUserStep.PersonalDetails1:
      return (
        <AuthPersonalDetails1
          description={
            <FormattedMessage id="auth.confirmInvitedUser.personalDetails" />
          }
        />
      );
    case ConfirmInvitedUserStep.PersonalDetails2:
      return (
        <AuthPersonalDetails2
          description={
            <FormattedMessage id="auth.confirmInvitedUser.personalDetails" />
          }
        />
      );
    case ConfirmInvitedUserStep.Password:
      return <AuthPassword password={values.password} />;
    case ConfirmInvitedUserStep.FinalStep:
      return <ConfirmInvitedUserFinalStep />;
    default:
      return null;
  }
}
