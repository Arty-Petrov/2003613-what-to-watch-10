import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import SomeComp from '../../components/some-comp/some-comp';

function NotFoundPage(): JSX.Element {
  return (
    <div className="not-found-page">
      <header className="page-header">
        <Logo />
        <SomeComp addElement={false} />
      </header>

      <div className="not-found-page">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
