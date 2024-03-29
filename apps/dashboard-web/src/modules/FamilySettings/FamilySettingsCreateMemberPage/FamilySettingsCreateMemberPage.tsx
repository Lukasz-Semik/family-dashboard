import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';

import { ButtonArrowBack } from '@family-dashboard/design-system';
import { webRoutes } from '@family-dashboard/global/const';
import { GTMemberType } from '@family-dashboard/global/types';

import { CreateMemberForm } from './CreateMemberForm/CreateMemberForm';
import { CreateMemberInitialStep } from './CreateMemberInitialStep/CreateMemberInitialStep';
import { StyledBackButtonWrapper } from './FamilySettingsCreateMemberPage.styled';
import { CreateStep } from './FamilySettingsCreateMemberPage.types';

export function FamilySettingsCreateMemberPage() {
  const history = useHistory();
  const [memberType, setMemberType] = useState<GTMemberType | null>(null);
  const [createStep, setCreateStep] = useState<CreateStep>(CreateStep.Initial);

  return (
    <div>
      <StyledBackButtonWrapper>
        <ButtonArrowBack
          onClick={() =>
            history.push(
              webRoutes.dashboard.familySettings.familySettingsRoute.path
            )
          }
        >
          <FormattedMessage id="shared.backToLists" />
        </ButtonArrowBack>
      </StyledBackButtonWrapper>

      {createStep === CreateStep.Initial && (
        <CreateMemberInitialStep
          memberType={memberType}
          setMemberType={setMemberType}
          startCreation={() => setCreateStep(CreateStep.Creating)}
        />
      )}

      {createStep === CreateStep.Creating && (
        <CreateMemberForm
          backToInitialStep={() => setCreateStep(CreateStep.Initial)}
        />
      )}
    </div>
  );
}
