import {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {addFilmCommentAction} from '../../store/api-actions';
import ReviewFormStar from '../review-form-star/review-form-star';
import {useNavigate, useParams} from 'react-router-dom';
import {getCommentsLoadingStatus, getReviewSubmitStatus} from '../../store/review-process/selector';
import {AppRoute} from '../../util/const';
import {resetReviewState} from '../../store/review-process/review-process';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

const MIN_SYMBOLS_COUNT = 50;
const MAX_SYMBOLS_COUNT = 400;

function ReviewForm(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isDataLoading = useAppSelector(getCommentsLoadingStatus);
  const isReviewSubmited = useAppSelector(getReviewSubmitStatus);

  const textInputRef = useRef('');
  const starsFieldRef = useRef('');
  const getButtonStatus = (status: boolean): boolean => status || isDataLoading;
  const [isButtonDisabled, setIsButtonDisabled] = useState(getButtonStatus(true));
  const [formData, setFormData] = useState({
    rating: '',
    commentText: '',
  });

  const handleTextInputChange = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement >) => {
    const {name, value} = (evt.target);
    setFormData({...formData, [name]: value});
  };

  const handleRatingInputChange = (evt: ChangeEvent<HTMLInputElement >) => {
    const {name, value} = (evt.target);
    setFormData({...formData, [name]: value});
  };

  const starsButtonList = Array.from({length: 10}, (_, i) => {
    const index = String(10 - i);
    return <ReviewFormStar index={index} key={index} />;
  });

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (textInputRef.current !== null) {
      dispatch(addFilmCommentAction({
        filmId: String(id),
        comment: formData.commentText,
        rating: Number(formData.rating),
      }));
    }
  };

  useEffect(()=>{
    const {rating, commentText} = formData;
    starsFieldRef.current = rating;
    textInputRef.current = commentText;
    if (isReviewSubmited) {
      navigate(`${AppRoute.Film}${id}`);
      dispatch(resetReviewState());
      return;
    }
    if (rating !== ''
      && commentText.length >= MIN_SYMBOLS_COUNT
      && commentText.length <= MAX_SYMBOLS_COUNT) {
      return setIsButtonDisabled(getButtonStatus(false));
    }
    setIsButtonDisabled(getButtonStatus(true));
  }, [dispatch, formData, getButtonStatus, id, isReviewSubmited, navigate]);

  if (isDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="add-review">
      <form
        action=""
        className="add-review__form"
        onSubmit={handleFormSubmit}
      >
        <div className="rating">
          <div className="rating__stars" onChange={handleRatingInputChange}>
            {starsButtonList}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            onChange={handleTextInputChange}
            className="add-review__textarea"
            name="commentText"
            id="comment-text"
            placeholder="Review text"
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              disabled={isButtonDisabled}
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
