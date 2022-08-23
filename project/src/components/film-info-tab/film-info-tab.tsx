import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FilmInfoSection } from '../../util/const';
import FilmDetailsSection from '../film-details-section/film-details-section';
import FilmOverviewSection from '../film-overview-section/film-overview-section';
import FilmReviewSection from '../film-review-section/film-review-section';

function FilmInfoTab(): JSX.Element{
  const [activeSectionType, setActiveSectionType] = useState<string>(FilmInfoSection.Overview);
  // eslint-disable-next-line no-console
  console.log('state',activeSectionType);

  const setFilmInfoSection = (): JSX.Element | undefined => {
    switch (activeSectionType) {
      case FilmInfoSection.Details:
        return <FilmDetailsSection />;
        break;
      case FilmInfoSection.Reviews:
        return <FilmReviewSection />;
        break;
      default:
        return <FilmOverviewSection />;
        break;
    }
  };

  const setActiveClass = (sectionType: FilmInfoSection): string => (activeSectionType === sectionType)
    ? 'film-nav__item--active'
    : '';

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${setActiveClass(FilmInfoSection.Overview)}`}>
            <NavLink to="/" className="film-nav__link"
              onClick={(evt)=> {
                evt.preventDefault();
                setActiveSectionType(FilmInfoSection.Overview);
              }}
            >
              {FilmInfoSection.Overview}
            </NavLink>
          </li>
          <li className={`film-nav__item ${setActiveClass(FilmInfoSection.Details)}`}>
            <NavLink to="/" className="film-nav__link"
              onClick={(evt)=> {
                evt.preventDefault();
                setActiveSectionType(FilmInfoSection.Details);
              }}
            >
              {FilmInfoSection.Details}
            </NavLink>
          </li>
          <li className={`film-nav__item ${setActiveClass(FilmInfoSection.Reviews)}`}>
            <NavLink to="/" className="film-nav__link"
              onClick={(evt)=> {
                evt.preventDefault();
                setActiveSectionType(FilmInfoSection.Reviews);
              }}
            >
              {FilmInfoSection.Reviews}
            </NavLink>
          </li>
        </ul>
      </nav>
      {setFilmInfoSection()}
    </div>
  );
}
export default FilmInfoTab;
