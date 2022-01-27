import { FormattedMessage } from 'react-intl';
import { Formik } from 'formik';

import { LoaderSimple } from '@family-dashboard/design-system';

import { StyledFlexForm, StyledFormTitle } from '../Auth.styled';
import { AuthLayout } from '../AuthLayout/AuthLayout';
import { AuthIndicatorProgress } from '../AuthProgressIndicator/AuthIndicatorProgress';
import { useSignUp } from './_hooks/useSignUp';
import { StyledFormTitleHeader, StyledLoaderWrapper } from './SignUp.styled';
import { Values } from './SignUp.types';
import { progressMap } from './SignUp.utils';
import { SignUpButtonsGroup } from './SignUpButtonsGroup/SignUpButtonGroup';
import { SignUpStepController } from './SignUpStepController/SignUpStepController';

const STEPS_COUNT = 7;

export function SignUp() {
  const {
    onSubmit,
    currentStep,
    isLoading,
    verifyEmailResponse,
    hasFailedPin,
    resetHasFailedPin,
  } = useSignUp();

  return (
    <AuthLayout>
      <AuthIndicatorProgress
        progress={progressMap[currentStep].progress}
        content={`${progressMap[currentStep].step}/${STEPS_COUNT}`}
      />

      <Formik<Values>
        initialValues={{
          email: '',
          firstName: '',
          middleName: '',
          lastName: '',
          familyName: '',
          isConsentGiven: false,
          isLastNameDifferent: false,
          gender: undefined,
          dob: '',
          password: '',
          code0: '',
          code1: '',
          code2: '',
          code3: '',
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

                {!isLoading && (
                  <SignUpStepController
                    currentStep={currentStep}
                    verifyEmailResponse={verifyEmailResponse}
                    hasFailedPin={hasFailedPin}
                    resetHasFailedPin={resetHasFailedPin}
                  />
                )}
              </div>

              {!isLoading ? (
                <div>
                  <SignUpButtonsGroup currentStep={currentStep} />
                </div>
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
