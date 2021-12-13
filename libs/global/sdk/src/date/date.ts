import dayjs from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(CustomParseFormat);

export const FULL_DATE_FORMAT = 'DD-MM-YYYY';
export const sdkValidateDateValid = (value: string) =>
  dayjs(value, 'DD-MM-YYYY').format('DD-MM-YYYY') !== value;

export const getIsTodayAfter = (afterDate?: string) =>
  dayjs.utc().isAfter(dayjs.utc(afterDate));
