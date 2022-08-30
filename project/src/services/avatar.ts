const AVATAR_LINK = 'avatar-link';

export type Avatar = string;

export const getAvatar = (): Avatar => {
  const userAvatarLink = localStorage.getItem(AVATAR_LINK);
  return userAvatarLink ?? '';
};

export const saveAvatar = (userAvatarLink: Avatar): void => {
  localStorage.setItem(AVATAR_LINK, userAvatarLink);
};

export const dropAvatar = (): void => {
  localStorage.removeItem(AVATAR_LINK);
};
