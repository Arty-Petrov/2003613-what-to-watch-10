type ReviewFormStarProps = {
  index: string;
}

function ReviewFormStar({index}: ReviewFormStarProps): JSX.Element {
  return (
    <>
      <input className="rating__input" id={`star-${index}`} type="radio" name="rating" value={`${index}`} />
      <label className="rating__label" htmlFor={`star-${index}`}>{`Rating ${index}`}</label>
    </>);
}

export default ReviewFormStar;
