import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { generateFilms } from './mock/film-data';
import { store } from './store';

const films = generateFilms();
const user = {
  avatarUrl: 'img/avatar.jpg',
  email: 'string',
  id: 0,
  name: 'string',
  token: 'string',
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        films={films}
        promo={films[0]}
        user={user}
      />
    </Provider>
  </React.StrictMode>,
);
