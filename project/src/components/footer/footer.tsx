import React from 'react';
import { LogoState } from '../../util/const';
import Logo from '../logo/logo';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo renderPlace={LogoState.Footer}/>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
