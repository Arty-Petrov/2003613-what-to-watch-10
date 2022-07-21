import Film from '../types/film';

export const generateFilms = (): Film[] => {
  const films: Film[] = [];
  const film: Film = {
    id: 0,
    name: 'The Grand Budapest Hotel',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/orlando.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: 'string',
    videoLink: 'string',
    previewVideoLink: 'string',
    description:
  `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
  Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    rating: 8.9,
    scoresCount: 4,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 120,
    genre: 'Drama',
    released: 2014,
    isFavorite: false,
  };
  for (let i = 0; i < 20; i++){
    const newFilm = {...film};
    newFilm.id = i;
    films.push(newFilm);
  }
  return films;
};
