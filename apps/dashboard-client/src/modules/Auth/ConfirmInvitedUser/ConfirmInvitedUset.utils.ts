import { ConfirmInvitedUserStep } from './ConfirmInvitedUser.types';

export const progressMap = {
  [ConfirmInvitedUserStep.InitialStep]: {
    step: 1,
    progress: Math.round((1 / 5) * 100),
  },
  [ConfirmInvitedUserStep.PersonalDetails1]: {
    step: 2,
    progress: Math.round((2 / 5) * 100),
  },
  [ConfirmInvitedUserStep.PersonalDetails2]: {
    step: 3,
    progress: Math.round((3 / 5) * 100),
  },
  [ConfirmInvitedUserStep.Password]: {
    step: 4,
    progress: Math.round((4 / 5) * 100),
  },
  [ConfirmInvitedUserStep.FinalStep]: {
    step: 5,
    progress: Math.round((5 / 5) * 100),
  },
  [ConfirmInvitedUserStep.Error]: {
    step: 1,
    progress: Math.round((1 / 5) * 100),
  },
};
