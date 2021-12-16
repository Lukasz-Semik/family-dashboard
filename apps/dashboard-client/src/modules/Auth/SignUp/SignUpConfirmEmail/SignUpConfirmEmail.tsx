import { FormattedMessage } from 'react-intl';
import { useFormikContext } from 'formik';

import { ErrorMessage } from '@family-dashboard/design-system';
import { FieldInputsPureConnectedGroup } from '@family-dashboard/fe-libs/field-controls';

import { StyledCommonDescription } from '../SignUp.styled';
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

      <StyledButtonResend>
        <FormattedMessage id="auth.signUp.confirmEmail.sendNewCode" />
      </StyledButtonResend>
    </>
  );
}
