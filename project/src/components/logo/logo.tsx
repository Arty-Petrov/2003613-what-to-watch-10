import { Link } from 'react-router-dom';


function Logo(): JSX.Element {
  // Сейчас компонент предствален в максимально возможном состояние,
  // нужно сделать, чтобю он принимал параметры окружения и в соответсвии
  // с ними менял свои совойства (линки/стили)

  return (
    <div className="logo">
      <Link to="/" className="logo__link logo__link--light">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
