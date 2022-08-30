import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const MINUTES_IN_HOUR = 60;

export const convertMinutesToHM = (minutes: number): string => {
  const hours = (minutes >= MINUTES_IN_HOUR) ? (minutes / MINUTES_IN_HOUR).toFixed(0) : 0 ;
  const min = (minutes % MINUTES_IN_HOUR) ? 0 : (minutes % MINUTES_IN_HOUR).toFixed(0);
  return `${hours}h ${min}m`;
};

export const convertUtcToDateFormat = (date: string, format: string) => dayjs(date).format(format);

export const convertNumToFormatedString = (number: number): string => number.toLocaleString('ru-RU', {minimumFractionDigits:1, maximumFractionDigits:1});
