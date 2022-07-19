import User from './user';

type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Pick<User, 'id' | 'name'>;
};

export default Comment;
