import Comment from '../../types/comment';
import FilmReviewComment from '../film-review-comment/film-review-comment';

type FilmReviewProps = {
  filmReviewComments: Comment[];
}

function FilmReview({filmReviewComments}: FilmReviewProps): JSX.Element {

  function orderReviewCommentsInCollumns (comments: Comment[]): JSX.Element {
    let arrayMiddleIndex: number;
    let arrayStartIndex = 0;
    let collunmKeyIndex = 0;
    const arrayLength = comments.length;
    const collumns: JSX.Element[] = [];

    function getReviewCollumn(commentsPart: Comment[], index = 0): JSX.Element {
      return (
        <div key={index} className="film-card__reviews-col">
          {commentsPart.map((item) => <FilmReviewComment comment={item} key={item.id}/>)}
        </div>
      );}

    if (arrayLength <= 3) {
      collumns.push(getReviewCollumn(comments));
    }

    if (arrayLength > 3 && arrayLength <= 6) {
      arrayMiddleIndex = 3;
    } else {
      arrayMiddleIndex = (arrayLength % 2 !== 0) ? (arrayLength + 1) / 2 : arrayLength / 2;
    }

    while (arrayStartIndex <= arrayLength) {
      const commentsPart = comments.slice(arrayStartIndex, arrayMiddleIndex);

      arrayStartIndex = arrayMiddleIndex;
      arrayMiddleIndex *= 2;
      collumns.push(getReviewCollumn(commentsPart, collunmKeyIndex));
      collunmKeyIndex++;
    }

    return (
      <>
        {collumns.map((item) => item)}
      </>);
  }

  return (
    <div className="film-card__reviews film-card__row">
      {orderReviewCommentsInCollumns(filmReviewComments)}
    </div>
  );
}

export default FilmReview;
