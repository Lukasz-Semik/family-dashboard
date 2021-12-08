import { FormattedMessage } from 'react-intl';

import { FieldInputsPureConnectedGroup } from '@family-dashboard/form-controls';

import { StyledCommonDescription } from '../SignUp.styled';
import {
  StyledButtonResend,
  StyledInnerWrapper,
  StyledInputsWrapper,
} from './SignUpConfirmEmail.styled';

export function SignUpConfirmEmail() {
  return (
    <>
      <StyledInnerWrapper>
        <StyledCommonDescription>
          <FormattedMessage
            id="auth.signUp.confirmEmail.description"
            values={{ email: 'djpluki@gmail.com' }}
          />
        </StyledCommonDescription>
      </StyledInnerWrapper>

      <StyledInputsWrapper>
        <FieldInputsPureConnectedGroup
          type="password"
          groupName="code"
          quantity={4}
        />
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
