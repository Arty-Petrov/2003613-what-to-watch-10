import Comment from '../../types/comment';
import FilmReviewComment from '../film-review-comment/film-review-comment';

type FilmReviewProps = {
  filmReviewComments: Comment[];
}

function FilmReview({filmReviewComments}: FilmReviewProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {filmReviewComments.map((item) => <FilmReviewComment comment={item} key={item.id}/>)}
      </div>
    </div>
  );
}

export default FilmReview;
