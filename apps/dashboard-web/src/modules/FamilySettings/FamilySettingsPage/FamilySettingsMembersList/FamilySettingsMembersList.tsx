import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';

import {
  IconPen,
  IconProgress,
  ListStandard,
  ListStandardHeaderColumn,
  ListStandardHeadersWrapper,
  ListStandardItem,
  ListStandardItemColumn,
  ListStandardNoItemsMessage,
} from '@family-dashboard/design-system';
import { FULL_DATE_FORMAT } from '@family-dashboard/global/const';
import { CTUserBaseData } from '@family-dashboard/global/types';
import {
  useSelectFamily,
  useSelectUser,
} from '@family-dashboard/web-libs/store';

import {
  StyledContentWithIconWrapper,
  StyledDescriptionColumnContent,
  StyledDescriptionColumnLabel,
  StyledIconWrapper,
  StyledListTitle,
} from '../FamilySettingsPage.styled';
import { StyledEditIconWrapper } from './FamilySettingsMembersList.styled';

export function FamilySettingsMembersList() {
  const family = useSelectFamily();
  const user = useSelectUser();

  return (
    <>
      <StyledListTitle>
        <FormattedMessage id="familySettings.familyMembers" />
      </StyledListTitle>

      <ListStandard<CTUserBaseData>
        items={[user.data, ...family.users]}
        renderHeaders={() => (
          <ListStandardHeadersWrapper>
            <ListStandardHeaderColumn width="40%">
              <FormattedMessage id="shared.name" />
            </ListStandardHeaderColumn>
            <ListStandardHeaderColumn width="30%">
              <FormattedMessage id="shared.type" />
            </ListStandardHeaderColumn>
            <ListStandardHeaderColumn width="20%">
              <FormattedMessage id="shared.birthday" />
            </ListStandardHeaderColumn>
          </ListStandardHeadersWrapper>
        )}
        renderItem={(item) => (
          <ListStandardItem isInteractive key={item.email}>
            {({ isFocused, isHovered }) => (
              <>
                <ListStandardItemColumn width="40%">
                  <StyledContentWithIconWrapper>
                    <StyledIconWrapper>
                      <IconProgress />
                    </StyledIconWrapper>
                    {item.firstName} {item.middleName?.charAt(0)}{' '}
                    {item.lastName}
                  </StyledContentWithIconWrapper>
                </ListStandardItemColumn>

                <ListStandardItemColumn width="30%">
                  Adult user
                </ListStandardItemColumn>

                <ListStandardItemColumn width="20%">
                  <StyledDescriptionColumnContent
                    isMarked={isFocused || isHovered}
                  >
                    <StyledDescriptionColumnLabel>
                      <FormattedMessage id="shared.birthday" />:{' '}
                    </StyledDescriptionColumnLabel>
                    {dayjs(item.dob).format(FULL_DATE_FORMAT)}
                  </StyledDescriptionColumnContent>
                </ListStandardItemColumn>

                <ListStandardItemColumn width="10%">
                  <StyledEditIconWrapper isMarked={isFocused || isHovered}>
                    <IconPen width="18px" height="18px" />
                  </StyledEditIconWrapper>
                </ListStandardItemColumn>
              </>
            )}
          </ListStandardItem>
        )}
        renderNoItemsMessage={() => (
          <ListStandardNoItemsMessage>
            <FormattedMessage id="shared.emptyList" />
          </ListStandardNoItemsMessage>
        )}
      />
    </>
  );
}
