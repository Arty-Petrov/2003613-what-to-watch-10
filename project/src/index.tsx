import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { generateFilms } from './mock/film-data';
import { store } from './store';
import { checkAuthAction, fetchFilmsAction } from './store/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

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
        promo={films[0]}
        user={user}
      />
    </Provider>
  </React.StrictMode>,
);
