import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import { Formik } from 'formik';

import { LoaderSimple } from '@family-dashboard/design-system';
import { FULL_DATE_FORMAT } from '@family-dashboard/global/const';
import { GTInvitation } from '@family-dashboard/global/types';

import { StyledFlexForm, StyledFormTitle } from '../Auth.styled';
import { AuthLayout } from '../AuthLayout/AuthLayout';
import { AuthIndicatorProgress } from '../AuthProgressIndicator/AuthIndicatorProgress';
import { useConfirmInvitedUser } from './_hooks/useConfirmInvitedUser';
import { useInitialData } from './_hooks/useInitialData';
import {
  StyledFormTitleHeader,
  StyledLoaderWrapper,
} from './ConfirmInvitedUser.styled';
import { Values } from './ConfirmInvitedUser.types';
import { ConfirmInvitedUserButtonsGroup } from './ConfirmInvitedUserButtonsGroup/ConfirmInvitedUserButtonsGroup';
import { ConfirmInvitedUserError } from './ConfirmInvitedUserError/ConfirmInvitedUserError';
import { ConfirmInvitedUserStepController } from './ConfirmInvitedUserStepController/ConfirmInvitedUserStepController';
import { progressMap } from './ConfirmInvitedUset.utils';

const STEPS_COUNT = 5;

export function ConfirmInvitedUser() {
  const { onSubmit, currentStep, isLoadingUserInvitation } =
    useConfirmInvitedUser();
  const {
    initialData,
    isLoading: isLoadingInitialData,
    isFailed,
  } = useInitialData();
  const isLoading = isLoadingInitialData || isLoadingUserInvitation;
  const isLoaded = Boolean(!isLoading && initialData);

  return (
    <AuthLayout>
      <AuthIndicatorProgress
        progress={progressMap[currentStep].progress}
        content={`${progressMap[currentStep].step}/${STEPS_COUNT}`}
      />

      <Formik<Values>
        enableReinitialize
        initialValues={{
          firstName: initialData?.personalDetails.firstName ?? '',
          middleName: initialData?.personalDetails.middleName ?? '',
          lastName: initialData?.personalDetails.lastName ?? '',
          gender: initialData?.personalDetails.gender ?? undefined,
          dob: dayjs(initialData?.personalDetails.dob).format(FULL_DATE_FORMAT),
          email: initialData?.email ?? '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => {
          return (
            <StyledFlexForm onSubmit={handleSubmit}>
              <div>
                <StyledFormTitleHeader>
                  <StyledFormTitle>
                    <FormattedMessage id="auth.signUp.title" />
                  </StyledFormTitle>
                </StyledFormTitleHeader>

                {isLoaded && (
                  <ConfirmInvitedUserStepController
                    currentStep={currentStep}
                    invitationData={initialData as GTInvitation}
                  />
                )}

                {!isLoading && isFailed && <ConfirmInvitedUserError />}
              </div>

              {!isLoading ? (
                <ConfirmInvitedUserButtonsGroup
                  isFailed={isFailed}
                  currentStep={currentStep}
                />
              ) : (
                <StyledLoaderWrapper>
                  <LoaderSimple />
                </StyledLoaderWrapper>
              )}
            </StyledFlexForm>
          );
        }}
      </Formik>
    </AuthLayout>
  );
}
