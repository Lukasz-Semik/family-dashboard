import { FormattedMessage } from 'react-intl';
import { Formik } from 'formik';

import { CTGender } from '@family-dashboard/common-types';
import { Loader } from '@family-dashboard/design-system';

import {
  StyledFormTitle,
  StyledHeader,
  StyledHeaderTitle,
  StyledWrapper,
} from '../Auth.styled';
import { useSignUp } from './hooks/useSignUp';
import {
  StyledForm,
  StyledFormTitleHeader,
  StyledInnerWrapper,
  StyledLoaderWrapper,
} from './SignUp.styled';
import { Values } from './SignUp.types';
import { SignUpButtonsGroup } from './SignUpButtonsGroup/SignUpButtonGroup';
import { SignUpEmailStepController } from './SignUpEmailStepController/SignUpEmailStepController';
import { SignUpIndicatorProgress } from './SignUpIndicatorProgress/SignUpIndicatorProgress';

export function SignUp() {
  const { onSubmit, currentStep, isLoadingVerifyEmail, verifyEmailResponse } =
    useSignUp();

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledHeaderTitle>Family Dashboard</StyledHeaderTitle>
      </StyledHeader>

      <StyledInnerWrapper>
        <SignUpIndicatorProgress currentStep={currentStep} />

        <Formik<Values>
          initialValues={{
            email: 'djpluki@gmail.com',
            firstName: 'Lukasz',
            middleName: 'L',
            lastName: 'Semik',
            familyName: 'Semil',
            isConsentGiven: false,
            isLastNameDifferent: false,
            gender: CTGender.Male,
            dob: '01-12-2000',
            password: 'Password123*',
            code0: '',
            code1: '',
            code2: '',
            code3: '',
          }}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => {
            return (
              <StyledForm onSubmit={handleSubmit}>
                <div>
                  <StyledFormTitleHeader>
                    <StyledFormTitle>
                      <FormattedMessage id="auth.signUp.title" />
                    </StyledFormTitle>
                  </StyledFormTitleHeader>

                  {!isLoadingVerifyEmail && (
                    <SignUpEmailStepController
                      currentStep={currentStep}
                      verifyEmailResponse={verifyEmailResponse}
                    />
                  )}
                </div>

                {!isLoadingVerifyEmail && (
                  <div>
                    <SignUpButtonsGroup currentStep={currentStep} />
                  </div>
                )}

                {isLoadingVerifyEmail && (
                  <StyledLoaderWrapper>
                    <Loader />
                  </StyledLoaderWrapper>
                )}
              </StyledForm>
            );
          }}
        </Formik>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
}
