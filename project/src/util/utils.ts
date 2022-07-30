import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const convertMinutesToHM = (minutes: number): string => {
  const hours = (minutes >= 60) ? (minutes / 60).toFixed(0) : 0 ;
  const min = (minutes % 60) ? 0 : (minutes % 60).toFixed(0);
  return `${hours}h ${min}m`;
};
