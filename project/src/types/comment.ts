import { UserData } from './user-data';

export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Pick<UserData, 'id' | 'name'>;
};

export default Comment;
