import {
  format,
  differenceInDays,
  differenceInCalendarYears,
  formatDistance,
} from 'date-fns';

export const getDateText = (date: Date): string => {
  const daysDifference = differenceInDays(new Date(), date);
  const yearsDifference = differenceInCalendarYears(new Date(), date);
  return Math.abs(daysDifference) > 7
    ? format(date, Math.abs(yearsDifference) > 0 ? 'LLLL do, yyyy' : 'LLLL do')
    : `${formatDistance(date, new Date())} ago`;
};

export const truncate = (text: string, length: number): string =>
  text.length > length ? `${text.substr(0, length - 1)}` : text;
