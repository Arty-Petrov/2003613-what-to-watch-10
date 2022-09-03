import { useAppSelector } from '../../hooks';
import { Comments } from '../../types/comment';
import FilmReviewComment from '../film-review-comment/film-review-comment';
import {getFilmComments} from '../../store/review-process/selector';

const MAX_REVIEWS_IN_TWO_REGULAR_COLUMNS = 6;
const MAX_REVIEWS_IN_SINGLE_COLUMN = 3;

const orderReviewCommentsInColumns = (filmComments: Comments): JSX.Element => {
  let arrayMiddleIndex = MAX_REVIEWS_IN_TWO_REGULAR_COLUMNS / 2;
  let arrayStartIndex = 0;
  let columnKeyIndex = 0;
  const arrayLength = filmComments.length;
  const columns: JSX.Element[] = [];

  function getReviewColumn(commentsPart: Comments, index = 0): JSX.Element {
    return (
      <div key={index} className="film-card__reviews-col">
        {commentsPart.map((item) => <FilmReviewComment comment={item} key={item.id}/>)}
      </div>
    );}

  if (arrayLength > MAX_REVIEWS_IN_TWO_REGULAR_COLUMNS) {
    arrayMiddleIndex = (arrayLength % 2 !== 0) ? (arrayLength + 1) / 2 : arrayLength / 2;
  }
  if (arrayLength <= MAX_REVIEWS_IN_SINGLE_COLUMN) {
    columns.push(getReviewColumn(filmComments));
  } else {
    while (arrayStartIndex <= arrayLength) {
      const commentsPart = filmComments.slice(arrayStartIndex, arrayMiddleIndex);

      arrayStartIndex = arrayMiddleIndex;
      arrayMiddleIndex *= 2;
      columns.push(getReviewColumn(commentsPart, columnKeyIndex));
      columnKeyIndex++;
    }
  }

  return (
    <>
      {columns.map((item) => item)}
    </>);
};

function FilmReviewSection(): JSX.Element {
  const comments = useAppSelector(getFilmComments);

  return (
    <div className="film-card__reviews film-card__row">
      {(comments === null) ? null : orderReviewCommentsInColumns(comments)}
    </div>
  );
}

export default FilmReviewSection;
