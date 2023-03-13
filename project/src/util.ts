import { MAX_PERCENT_STARS_WIDTH, STARS_COUNT } from './constant';
import dayjs from 'dayjs';

const toUpperCaseFirstChar = (str: string): string => str[0].toUpperCase() + str.slice(1);

const getStartsWidth = (rating: number): string => {
  const result = MAX_PERCENT_STARS_WIDTH * rating / STARS_COUNT;
  return `${String(result)}%`;
};

const formatDate = (date: string, format: string) => dayjs(date).format(format);

export {
  toUpperCaseFirstChar,
  getStartsWidth,
  formatDate
};
