import { differenceInDays } from 'date-fns';
import { getSampleDates, sampleText } from '../utils/mockData';

import { createDateText, truncate } from '../../utils/helpers';

describe('createDateText', () => {
  const {
    today,
    tenMinAgo,
    twoHoursAgo,
    yesterday,
    oneWeekAgo,
    janOneThisYear,
    oneYearAgo,
  } = getSampleDates();

  it.each`
    date           | pattern
    ${tenMinAgo}   | ${/^[0-5]{0,1}[0-9]{0,1} minute[s]{0,1} ago/}
    ${twoHoursAgo} | ${/^about [1-24] hour[s]{0,1} ago/}
    ${yesterday}   | ${/^[1-7] day[s]{0,1} ago/}
    ${oneWeekAgo}  | ${/^[1-7] day[s]{0,1} ago/}
  `(
    'should return text in the form of x <time> ago for dates no older than a week ago',
    ({ date, pattern }) => {
      expect(createDateText(date)).toMatch(pattern);
    }
  );

  it('should return Month Day for Dates in this year', () => {
    const pattern = /^(January|February|March|April|May|June|July|August|September|October|November|December) [1-3]{0,1}[1-9]{1}(st|nd|rd|th){1}$/;
    if (differenceInDays(today, janOneThisYear) <= 7) return;

    expect(createDateText(janOneThisYear)).toMatch(pattern);
  });

  it('should return Month Day Year for Dates of previous year', () => {
    const pattern = /^(January|February|March|April|May|June|July|August|September|October|November|December) [1-3]{0,1}[1-9]{1}(st|nd|rd|th){1}, \d{1,4}$/;
    expect(createDateText(oneYearAgo)).toMatch(pattern);
  });
});

describe('truncate', () => {
  it('should return a string with a max length of (specifiedMax + 3)', () => {
    const desiredLength = 60;
    expect(truncate(sampleText, desiredLength).length).toBeLessThanOrEqual(
      desiredLength + 3
    );
  });

  it('should have three dots at the end of the returned string', () => {
    const desiredLength = 89;
    expect(truncate(sampleText, desiredLength)).toMatch(/\.{3}$/);
  });
});
