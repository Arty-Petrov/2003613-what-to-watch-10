import User from '../../types/user';

type UserBlockProps = Pick<User, 'name' | 'avatarUrl'>
function UserBlock({name, avatarUrl}: UserBlockProps): JSX.Element {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={avatarUrl} alt={`${name} avatar`} width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">..
        <a href="/" className="user-block__link">Sign out</a>
      </li>
    </ul>
  );
}

export default UserBlock;
