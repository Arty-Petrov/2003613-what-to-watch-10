import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import Film from './types/film';
import User from './types/user';

const Settings = {
  FILM_CARDS_COUNT: 20,
};
const filmProps: Film = {
  id: 0,
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/orlando.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
  backgroundColor: 'string',
  videoLink: 'string',
  previewVideoLink: 'string',
  description: 'string',
  rating: 8.9,
  scoresCount: 4,
  director: 'string',
  starring: ['string',],
  runTime: 120,
  genre: 'Drama',
  released: 2014,
  isFavorite: false,
};

const userProps: User = {
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
    <App
      film = {filmProps}
      user = {userProps}
      filmCardsCount = {Settings.FILM_CARDS_COUNT}
    />
  </React.StrictMode>,
);
