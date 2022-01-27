import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';

import {
  ButtonSecondary,
  ButtonStandard,
} from '@family-dashboard/design-system';
import { fdRoutes } from '@family-dashboard/global/const';

import { StyledCommonDescription } from '../../Auth.styled';
import {
  StyledButtonWrapper,
  StyledDescriptionWrapper,
} from './SignUpFinalStep.styled';

export function SignUpFinalStep() {
  const history = useHistory();

  return (
    <>
      <StyledDescriptionWrapper>
        <StyledCommonDescription>
          <FormattedMessage id="auth.signUp.confirmEmail.successDescription" />
        </StyledCommonDescription>
      </StyledDescriptionWrapper>

      <StyledButtonWrapper>
        <ButtonStandard
          type="button"
          onClick={() =>
            history.push(
              fdRoutes.dashboard.familySettings.familySettingsCreateUserRoute
                .path
            )
          }
        >
          <FormattedMessage id="controls.addFamilyMembers" />
        </ButtonStandard>
      </StyledButtonWrapper>

      <StyledDescriptionWrapper>
        <StyledCommonDescription>
          <FormattedMessage id="auth.signUp.confirmEmail.doItLater" />
        </StyledCommonDescription>
      </StyledDescriptionWrapper>

      <StyledButtonWrapper>
        <ButtonSecondary
          onClick={() => history.push(fdRoutes.dashboard.dashboardRoute.path)}
        >
          <FormattedMessage id="controls.goToDashboard" />
        </ButtonSecondary>
      </StyledButtonWrapper>
    </>
  );
}
