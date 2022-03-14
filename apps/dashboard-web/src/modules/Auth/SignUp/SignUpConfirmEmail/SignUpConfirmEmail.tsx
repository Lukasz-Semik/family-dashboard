import { FormattedMessage } from 'react-intl';
import { useMutation } from '@apollo/client';
import { useFormikContext } from 'formik';

import {
  ErrorMessage,
  showErrorToast,
  showSuccessToast,
} from '@family-dashboard/design-system';
import {
  Modal,
  ModalButtonsGroup,
  ModalText,
  ModalTitle,
  useModalState,
} from '@family-dashboard/design-system';
import {
  APIResendSignUpCodeResponse,
  APIResendSignUpCodeVariables,
  ResendSignUpCode,
} from '@family-dashboard/fe-libs/api-graphql';
import { FieldInputsPureConnectedGroup } from '@family-dashboard/web-libs/field-controls';

import { StyledCommonDescription } from '../../Auth.styled';
import { Values } from '../SignUp.types';
import {
  StyledButtonResend,
  StyledErrorWrapper,
  StyledInnerWrapper,
  StyledInputsWrapper,
} from './SignUpConfirmEmail.styled';

interface Props {
  hasFailedPin: boolean;
  resetHasFailedPin: () => void;
}

export function SignUpConfirmEmail({ hasFailedPin, resetHasFailedPin }: Props) {
  const { values } = useFormikContext<Values>();
  const [isModalOpen, openModal, closeModal] = useModalState();
  const [resendCode, { loading }] = useMutation<
    APIResendSignUpCodeResponse,
    APIResendSignUpCodeVariables
  >(ResendSignUpCode, {
    variables: {
      email: values.email,
    },
    onCompleted: () => {
      showSuccessToast(
        <FormattedMessage id="auth.signUp.confirmEmail.resendSuccess" />
      );
      closeModal();
    },
    onError: () => {
      showErrorToast(<FormattedMessage id="errors.somethingWentWrong" />);
    },
  });

  return (
    <>
      <StyledInnerWrapper>
        <StyledCommonDescription>
          <FormattedMessage
            id="auth.signUp.confirmEmail.description"
            values={{ email: values.email }}
          />
        </StyledCommonDescription>
      </StyledInnerWrapper>

      <StyledInputsWrapper>
        <div>
          <FieldInputsPureConnectedGroup
            hasError={hasFailedPin}
            onChange={resetHasFailedPin}
            type="password"
            groupName="code"
            quantity={4}
            autoFocus={!hasFailedPin}
          />
          <StyledErrorWrapper>
            <ErrorMessage isVisible={hasFailedPin}>
              <FormattedMessage id="auth.signUp.confirmEmail.invalidCode" />
            </ErrorMessage>
          </StyledErrorWrapper>
        </div>
      </StyledInputsWrapper>

      <StyledCommonDescription>
        <FormattedMessage id="auth.signUp.confirmEmail.codeDescription" />
      </StyledCommonDescription>

      <StyledButtonResend onClick={openModal}>
        <FormattedMessage id="auth.signUp.confirmEmail.sendNewCode" />
      </StyledButtonResend>

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <ModalTitle>
          <FormattedMessage id="auth.signUp.confirmEmail.sendNewCode" />
        </ModalTitle>
        <ModalText>
          <FormattedMessage id="auth.signUp.confirmEmail.sendNewCodeDescription" />
        </ModalText>

        <ModalButtonsGroup
          isConfirmLoading={loading}
          isDisabled={loading}
          onCancelButtonClick={closeModal}
          onConfirmButtonClick={resendCode}
          cancelContent={<FormattedMessage id="shared.cancel" />}
          confirmContent={<FormattedMessage id="shared.confirm" />}
        />
      </Modal>
    </>
  );
}
