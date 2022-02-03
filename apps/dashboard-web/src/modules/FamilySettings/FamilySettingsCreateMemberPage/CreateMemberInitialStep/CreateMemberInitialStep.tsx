import { FormattedMessage } from 'react-intl';

import { ButtonStandard, RadioStandard } from '@family-dashboard/design-system';
import { CTMemberType } from '@family-dashboard/global/types';

import {
  StyledButtonWrapper,
  StyledDescription,
  StyledLearnMoreButton,
  StyledRadioWrapper,
  StyledTitle,
} from './CreateMemberInitialStep.styled';

interface Props {
  memberType: CTMemberType | null;
  setMemberType: React.Dispatch<React.SetStateAction<CTMemberType | null>>;
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
          checked={memberType === CTMemberType.AdultUser}
          onClick={() => setMemberType(CTMemberType.AdultUser)}
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
          checked={memberType === CTMemberType.ChildUser}
          onClick={() => setMemberType(CTMemberType.ChildUser)}
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
