import { useAppSelector } from '../../hooks';
import { Comments } from '../../types/comment';
import FilmReviewComment from '../film-review-comment/film-review-comment';

const orderReviewCommentsInCollumns = (filmComments: Comments): JSX.Element => {
  let arrayMiddleIndex = 3;
  let arrayStartIndex = 0;
  let colunmKeyIndex = 0;
  const arrayLength = filmComments.length;
  const collumns: JSX.Element[] = [];

  function getReviewCollumn(commentsPart: Comments, index = 0): JSX.Element {
    return (
      <div key={index} className="film-card__reviews-col">
        {commentsPart.map((item) => <FilmReviewComment comment={item} key={item.id}/>)}
      </div>
    );}

  if (arrayLength > 6) {
    arrayMiddleIndex = (arrayLength % 2 !== 0) ? (arrayLength + 1) / 2 : arrayLength / 2;
  }
  if (arrayLength <= 3) {
    collumns.push(getReviewCollumn(filmComments));
  } else {
    while (arrayStartIndex <= arrayLength) {
      const commentsPart = filmComments.slice(arrayStartIndex, arrayMiddleIndex);

      arrayStartIndex = arrayMiddleIndex;
      arrayMiddleIndex *= 2;
      collumns.push(getReviewCollumn(commentsPart, colunmKeyIndex));
      colunmKeyIndex++;
    }
  }

  return (
    <>
      {collumns.map((item) => item)}
    </>);
};

function FilmReviewSection(): JSX.Element {
  const comments = useAppSelector((state) => state.comments);

  return (
    <div className="film-card__reviews film-card__row">
      {orderReviewCommentsInCollumns(comments)}
    </div>
  );
}

export default FilmReviewSection;
