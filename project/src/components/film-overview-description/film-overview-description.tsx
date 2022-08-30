import React from 'react';
import { useAppSelector } from '../../hooks';
import { getFilm } from '../../store/film-process/selector';

const FilmOverviewDescription = (): JSX.Element => {
  const film = useAppSelector(getFilm);

  const descriptionText = (film !== null) ? film.description : '';
  const searchSymbol = '/n';
  const descriptionComponent: JSX.Element[] = [];
  let keyIndex = 0;
  let lineStartIndex = 0;
  let lineEndIndex = descriptionText.indexOf(searchSymbol);

  if (lineEndIndex === -1) {
    descriptionComponent.push(<p key={keyIndex}>{descriptionText}</p>);
  }
  while (lineEndIndex !== -1) {
    descriptionComponent.push(<p key={keyIndex++}>{descriptionText.slice(lineStartIndex, lineEndIndex)};</p>);
    lineStartIndex = lineEndIndex + searchSymbol.length;
    lineEndIndex = descriptionText.indexOf(searchSymbol, lineStartIndex);
    if (lineEndIndex) {
      descriptionComponent.push(<p key={keyIndex++}>{descriptionText.slice(lineStartIndex, descriptionText.length - 1)}</p>);
    }
  }
  return (
    <>
      {descriptionComponent.map((item) => item)}
    </>
  );
};

export default React.memo(FilmOverviewDescription);
