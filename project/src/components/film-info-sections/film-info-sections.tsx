import { useState } from 'react';
import comments from '../../mock/comments';
import { Film } from '../../types/film';
import { FilmInfoSection } from '../../util/const';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReview from '../film-review/film-review';

type FilmInfoSectionsProps = {
  film: Film;
}

function FilmInfoSections({film}: FilmInfoSectionsProps): JSX.Element{
  const [sectionType, setSectionType] = useState<string>(FilmInfoSection.Overview);

  const setFilmInfoSection = (): JSX.Element | undefined=> {
    switch (sectionType) {
      case FilmInfoSection.Details:
        return <FilmDetails film={film}/>;
        break;
      case FilmInfoSection.Reviews:
        return <FilmReview filmReviewComments={comments}/>;
        break;
      default:
        return <FilmOverview film={film}/>;
        break;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <a href="/" className="film-nav__link"
              onClick={(evt)=> {
                evt.preventDefault();
                setSectionType(FilmInfoSection.Overview);
              }}
            >
              {FilmInfoSection.Overview}
            </a>
          </li>
          <li className="film-nav__item">
            <a href="/" className="film-nav__link"
              onClick={(evt)=> {
                evt.preventDefault();
                setSectionType(FilmInfoSection.Details);
              }}
            >
              {FilmInfoSection.Details}
            </a>
          </li>
          <li className="film-nav__item">
            <a href="/" className="film-nav__link"
              onClick={(evt)=> {
                evt.preventDefault();
                setSectionType(FilmInfoSection.Reviews);
              }}
            >
              {FilmInfoSection.Reviews}
            </a>
          </li>
        </ul>
      </nav>
      {setFilmInfoSection()}
    </div>
  );
}
export default FilmInfoSections;
