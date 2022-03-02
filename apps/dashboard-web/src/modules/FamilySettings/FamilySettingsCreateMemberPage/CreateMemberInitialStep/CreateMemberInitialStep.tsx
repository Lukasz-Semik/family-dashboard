import { FormattedMessage } from 'react-intl';

import { ButtonStandard, RadioStandard } from '@family-dashboard/design-system';
import { GTMemberType } from '@family-dashboard/global/types';

import {
  StyledButtonWrapper,
  StyledDescription,
  StyledLearnMoreButton,
  StyledRadioWrapper,
  StyledTitle,
} from './CreateMemberInitialStep.styled';

interface Props {
  memberType: GTMemberType | null;
  setMemberType: React.Dispatch<React.SetStateAction<GTMemberType | null>>;
  startCreation: () => void;
}

export function CreateMemberInitialStep({
  memberType,
  setMemberType,
  startCreation,
}: Props) {
  return (
    <div>
      <StyledTitle>
        <FormattedMessage id="familySettings.createMember.chooseMemberType" />
      </StyledTitle>

      <StyledLearnMoreButton>
        <FormattedMessage id="familySettings.createMember.learnMore" />
      </StyledLearnMoreButton>

      <StyledRadioWrapper>
        <RadioStandard
          label={
            <FormattedMessage id="familySettings.createMember.adultUser.label" />
          }
          checked={memberType === GTMemberType.AdultUser}
          onClick={() => setMemberType(GTMemberType.AdultUser)}
        />
      </StyledRadioWrapper>

      <StyledDescription>
        <FormattedMessage id="familySettings.createMember.adultUser.description" />
      </StyledDescription>

      <StyledRadioWrapper>
        <RadioStandard
          label={
            <FormattedMessage id="familySettings.createMember.childUser.label" />
          }
          checked={memberType === GTMemberType.ChildUser}
          onClick={() => setMemberType(GTMemberType.ChildUser)}
        />
      </StyledRadioWrapper>

      <StyledDescription>
        <FormattedMessage id="familySettings.createMember.adultUser.description" />
      </StyledDescription>

      <StyledButtonWrapper>
        <ButtonStandard disabled={!memberType} onClick={startCreation}>
          <FormattedMessage id="familySettings.addMember" />
        </ButtonStandard>
      </StyledButtonWrapper>
    </div>
  );
}
