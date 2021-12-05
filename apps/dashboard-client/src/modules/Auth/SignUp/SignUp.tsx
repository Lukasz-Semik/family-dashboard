import { FormattedMessage } from 'react-intl';
import { Formik } from 'formik';

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
          }}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, values }) => {
            console.log(values);
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
