import { ChangeEvent, FormEvent, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { addFilmCommentAction } from '../../store/api-actions';
import { CommentData } from '../../types/comment-data';
import ReviewFormStar from '../review-form-star/review-form-star';

function ReviewForm(): JSX.Element {
  const {id} = useParams();
  const textFieldRef = useRef('');
  const starsFieldRef = useRef('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const fieldChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = (evt.target);
    textFieldRef.current = value;
  };

  const starsButtonList = Array.from({length: 10}, (_, i) => {
    const index = String(10 - i);
    return <ReviewFormStar index={index} key={index}/>;
  });


  const ratingInputClickHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const {value} = (evt.target);
    starsFieldRef.current = value;
  };

  const onSubmitHandler = (commentData: CommentData) => {
    dispatch(addFilmCommentAction(commentData));
  };

  const formSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (textFieldRef.current !== null) {
      onSubmitHandler({
        filmId: String(id),
        comment: textFieldRef.current,
        rating: Number(starsFieldRef.current),
      });
    }
  };

  return (
    <div className="add-review">
      <form
        action=""
        className="add-review__form"
        onSubmit={formSubmitHandler}
      >
        <div className="rating">
          <div onChange={ratingInputClickHandler} className="rating__stars">
            {starsButtonList}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            onChange={fieldChangeHandler}
            className="add-review__textarea"
            name="commentText"
            id="comment-text"
            placeholder="Review text"
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              onClick={() => navigate(-1)}
              type="submit"
            >
              Post
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
