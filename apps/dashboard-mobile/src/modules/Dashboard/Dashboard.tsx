import React from 'react';

import { LayoutBackground } from '@family-dashboard/design-system-mobile';

import { StyledContentWrapper, StyledWrapper } from './Dashboard.styled';
import { DashboardBasicInfoPanel } from './DashboardBasicInfoPanel/DashboardBasicInfoPanel';
import { DashboardControls } from './DashboardControls/DashboardControls';
import { DashboardReminders } from './DashboardReminders/DashboardReminders';

export function Dashboard() {
  return (
    <LayoutBackground>
      <StyledWrapper>
        <StyledContentWrapper>
          <DashboardBasicInfoPanel />
          <DashboardReminders />
          <DashboardControls />
        </StyledContentWrapper>
      </StyledWrapper>
    </LayoutBackground>
  );
}
