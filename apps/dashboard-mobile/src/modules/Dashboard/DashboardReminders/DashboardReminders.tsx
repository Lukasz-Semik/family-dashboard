import React from 'react';
import { View } from 'react-native';

import {
  ButtonCreate,
  ButtonLink,
  IconClock,
  LayoutCard,
} from '@family-dashboard/design-system-mobile';
import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

import {
  StyledEmptyMessage,
  StyledHeader,
  StyledTitle,
  StyledTitleWrapper,
} from './DashboardReminders.styled';

export function DashboardReminders() {
  return (
    <View style={{ marginBottom: 24 }}>
      <LayoutCard>
        <StyledHeader>
          <StyledTitleWrapper>
            <View style={{ marginRight: 8 }}>
              <IconClock
                width={20}
                height={20}
                color={styledConstants.colors.orange4}
              />
            </View>

            <StyledTitle>Reminderds</StyledTitle>
          </StyledTitleWrapper>

          <ButtonLink text="More" />
        </StyledHeader>

        <View style={{ display: 'flex', alignItems: 'center' }}>
          <StyledEmptyMessage>You have no reminders yet</StyledEmptyMessage>
        </View>

        <View style={{ display: 'flex', alignItems: 'center' }}>
          <ButtonCreate text="Create new" />
        </View>
      </LayoutCard>
    </View>
  );
}
