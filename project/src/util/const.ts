export const FILM_COUNT_STEP = 8;

export const GenreButtonName: {[index: string]:string} = {
  All: 'All genres',
  Comedy: 'Comedies',
  Crime: 'Crime',
  Documentary: 'Documentary',
  Drama: 'Dramas',
  Horror: 'Horror',
  Adventure: 'Kids & Family',
  Romance: 'Romance',
  Scifi: 'Sci-Fi',
  Thriller: 'Thrillers',
} as const;


export const Genre: {[index: string]:string} = {
  AllGenres: 'All',
  Comedy: 'Comedy',
  Crime: 'Crime',
  Documentary: 'Documentary',
  Drama: 'Drama',
  Horror: 'Horror',
  Adventure: 'Adventure',
  Romance: 'Romance',
  Scifi: 'Scifi',
  Thriller: 'Thriller',
} as const;

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
  Unknown = 'UNKNOW',
}

export enum FilmInfoSection {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum FilmRating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export const FilmRatingCheck = {
  isBad: (rating: number)=>(rating < 3 && rating >= 0),
  isNormal: (rating: number)=>(rating < 5 && rating >= 3),
  isGood: (rating: number)=>(rating < 8 && rating >= 5),
  isVeryGood: (rating: number)=>(rating < 10 && rating >= 8),
  isAwesome: (rating: number)=>(rating === 10),
} as const;

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
} as const;

export enum APIRoute {
  Films = '/films',
  Film = '/films',
  Promo = '/promo',
  Favorite = '/favorite',
  Similar = '/similar',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

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
