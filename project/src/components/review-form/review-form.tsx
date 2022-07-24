import { ChangeEvent, useState } from 'react';
import ReviewFormStar from '../review-form-star/review-form-star';

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    reviewText: '',
    rating: null,
  });

  const starsButtonList = Array.from({length: 10}, (_, i) => {
    const index = String(10 - i);
    return <ReviewFormStar index={index} key={index}/>;
  });

  const fieldChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = (evt.target);
    setFormData({...formData, [name]: value});
  };

  const ratingInputClickHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = (evt.target);
    setFormData({...formData, [name]: value});
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div onChange={ratingInputClickHandler} className="rating__stars">
            {starsButtonList}
          </div>
        </div>

        <div className="add-review__text">
          <textarea onChange={fieldChangeHandler} value={formData.reviewText}
            className="add-review__textarea" name="reviewText" id="review-text"
            placeholder="Review text"
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
