import React from 'react';
import dayjs from 'dayjs';

import { FULL_DATE_FORMAT_DOTS } from '@family-dashboard/global/const';

import { StyledText, StyledWrapper } from './DashboardBasicInfoPanel.styled';

export function DashboardBasicInfoPanel() {
  return (
    <StyledWrapper>
      <StyledText>Łukasz Semik</StyledText>
      <StyledText>{dayjs().format(FULL_DATE_FORMAT_DOTS)}</StyledText>
    </StyledWrapper>
  );
}
