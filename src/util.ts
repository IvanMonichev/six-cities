import { MAX_PERCENT_STARS_WIDTH, STARS_COUNT } from './constant';
import dayjs from 'dayjs';

const capitalize = (str: string): string => str[0].toUpperCase() + str.slice(1);

const getStartsWidth = (rating: number): string => {
  const result = MAX_PERCENT_STARS_WIDTH * rating / STARS_COUNT;
  return `${String(result)}%`;
};

const formatDate = (date: string, format: string) => dayjs(date).format(format);

export {
  capitalize,
  getStartsWidth,
  formatDate
};

export const pluralize = (str: string, count: number) => count === 1 ? str : `${str}s`;
