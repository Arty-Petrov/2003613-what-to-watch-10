import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const convertSecondsToHHMMSS = (seconds: number): string =>
  dayjs.duration(seconds, 's').format('HH:mm:ss');

export const convertMinutesToHM = (minutes: number): string =>
  dayjs.duration(minutes, 'm').format('HH[h]:mm[m]');

export const convertUtcToDateFormat = (date: string, format: string) => dayjs(date).format(format);

export const convertNumToFormatedString = (number: number): string =>
  number.toLocaleString('ru-RU',
    {minimumFractionDigits:1, maximumFractionDigits:1});

