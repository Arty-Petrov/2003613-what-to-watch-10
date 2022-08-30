import './user-block.css';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../util/const';
import React from 'react';
import { getUserAvatar, getUserName, getAuthorizationStatus } from '../../store/user-process/selector';

function UserBlock(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userName = useAppSelector(getUserName);
  const avatarUrl = useAppSelector(getUserAvatar);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorised = (AuthorizationStatus.Auth === authorizationStatus);
  const userBlockLinkText = (isAuthorised) ? 'Sign out' : 'Log in';

  const AvatarBlock = (): JSX.Element | null => (avatarUrl === '') ? null : (
    <li className="user-block__item">
      <Link to={`${AppRoute.MyList}`}>
        <div className="user-block__avatar">
          <img src={avatarUrl} alt={`${userName} avatar`} width="63" height="63" />
        </div>
      </Link>
    </li>
  );

  const handleClickButton = () => {
    if (isAuthorised){
      dispatch(logoutAction());
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

export default React.memo(UserBlock);

