export enum Genres {
  AllGenres = 'All genres',
  Comedies = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Dramas',
  Horror = 'Horror',
  KidsAndFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thrillers',
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Player = '/player',
  Film = '/films/',
  AddReview = '/review',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknow = 'UNKNOW',
}

export const FilmsCatalogState = {
  Catalog: {
    headText: 'Catalog',
    headStyle: 'visually-hidden',
    genreList: true,
    moreButton: true,
    filmsCount: 20,
  },
  MoreLikeThis: {
    headText: 'More like this',
    headStyle: 'catalog--like-this',
    genreList: false,
    moreButton: false,
    filmsCount: 4,
  },
  MyList: {
    headText: 'Catalog',
    headStyle: 'visually-hidden',
    genreList: false,
    moreButton: false,
    filmsCount: 4,
  },
};

// export const LogoState = {
//   mainPageHead: {
//     logoStyle: '',
//     logoLink: '',
//   },
//   mainPageFooter: {
//     logoStyle: 'logo__link--light',
//     logoLink: '',
//   },
//   otherPageHead: {
//     logoStyle: '',
//     logoLink: '/',
//   },
//   otherPageFooter:{
//     logoStyle: 'logo__link--light',
//     logoLink: '/',
//   },
// };
