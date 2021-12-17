import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import {
  FULL_DATE_FORMAT_DOTS,
  FULL_TIME_FORMAT,
} from '@family-dashboard/global/const';

import { StyledText } from './CurrentDate.styled';

export function CurrentDate() {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <StyledText>
      {currentTime.format(FULL_DATE_FORMAT_DOTS)} -{' '}
      {currentTime.format(FULL_TIME_FORMAT)}
    </StyledText>
  );
}
