import {
  format,
  differenceInDays,
  differenceInCalendarYears,
  formatDistance,
} from 'date-fns';
import { Text } from '@contentful/rich-text-types';
import { POST_PREVIEW_DESCRIPTION_LENGTH } from './constants';

export const createDateText = (date: Date): string => {
  const daysDifference = differenceInDays(new Date(), date);
  const yearsDifference = differenceInCalendarYears(new Date(), date);
  return Math.abs(daysDifference) > 7
    ? format(date, Math.abs(yearsDifference) > 0 ? 'LLLL do, yyyy' : 'LLLL do')
    : `${formatDistance(date, new Date())} ago`;
};

export const truncate = (text: string, length: number): string => {
  const truncated =
    text.length > length ? `${text.substr(0, length - 1)}` : text;
  return truncated + '...';
};

export const getPreviewText = (fullContent: Text[]): string =>
  truncate(
    fullContent.reduce((acc: string, node: Text) => acc + node.value, ''),
    POST_PREVIEW_DESCRIPTION_LENGTH
  );
