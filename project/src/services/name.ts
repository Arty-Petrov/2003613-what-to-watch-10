const USER_NAME = 'user-name';

export type Name = string;

export const getName = (): Name => {
  const userName = localStorage.getItem(USER_NAME);
  return userName ?? '';
};

export const saveName = (userName: Name): void => {
  localStorage.setItem(USER_NAME, userName);
};

export const dropName = (): void => {
  localStorage.removeItem(USER_NAME);
};
