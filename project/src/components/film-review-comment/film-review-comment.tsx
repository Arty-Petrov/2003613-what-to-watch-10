import { Comment } from '../../types/comment';
import { DateFormat } from '../../util/const';
import { convertNumToFormatedString, convertUtcToDateFormat } from '../../util/utils';
type CommentProps = {
  comment: Comment,
};
function FilmReviewComment({comment}: CommentProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date"
            dateTime={convertUtcToDateFormat(comment.date, DateFormat.YearDayMonth)}
          >
            {convertUtcToDateFormat(comment.date, DateFormat.MonthDayYear)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{convertNumToFormatedString(comment.rating)}</div>
    </div>
  );
}

export default FilmReviewComment;
