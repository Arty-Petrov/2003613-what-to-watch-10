import './user-block.css';
import { useNavigate, Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { logoutAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../util/const';

function UserBlock(): JSX.Element {
  const {userInfo, authorizationStatus} = useAppSelector((state) => state);
  const navigate = useNavigate();
  const isAuthorised = (AuthorizationStatus.Auth === authorizationStatus);
  const userBlockLinkText = (isAuthorised) ? 'Sign out' : 'Log in';

  const AvatarBlock = (): JSX.Element | null => (userInfo === null) ? null : (
    <li className="user-block__item">
      <Link to={`${AppRoute.MyList}`}>
        <div className="user-block__avatar">
          <img src={userInfo.avatarUrl} alt={`${userInfo.userName} avatar`} width="63" height="63" />
        </div>
      </Link>
    </li>
  );

  const handleClickButton = () => {
    if (isAuthorised){
      store.dispatch(logoutAction());
    }
    (isAuthorised) ?
      navigate(AppRoute.Root)
      : navigate(AppRoute.Login);
  };

  return (
    <ul className="user-block">
      <AvatarBlock/>
      <li className="user-block__item">
        <button
          className="user-block__link"
          onClick={handleClickButton}
        >
          {userBlockLinkText}
        </button>
      </li>
    </ul>
  );
}

export default UserBlock;

