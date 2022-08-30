import React from 'react';
import { Link } from 'react-router-dom';
import { LogoState } from '../../util/const';

type LogoProps = {
  renderPlace: string,
}

function Logo({renderPlace}:LogoProps): JSX.Element {
  const logoFooterClass = 'logo__link--light';
  const logoColor = (renderPlace === LogoState.Footer) ? logoFooterClass : null;

  return (
    <div className="logo">
      <Link to="/" className={`logo__link ${logoColor}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default React.memo(Logo);
