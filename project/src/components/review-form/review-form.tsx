import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { STARS_COUNT } from '../../constant';
import type { CommentAuth } from '../../types/comment';

type ReviewFormProps = {
  onSubmit: (formData: Omit<CommentAuth, 'id'>) => void;
}

function ReviewForm({ onSubmit }: ReviewFormProps): JSX.Element {
  const [text, setText] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setRating(Number(evt.target.value));
  };

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      comment: text,
      rating
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array.from({length: STARS_COUNT}, (_, i) => (
          <Fragment key={`Star ${STARS_COUNT - i}`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={STARS_COUNT - i}
              id={`${STARS_COUNT - i}-stars`}
              type="radio"
              checked={STARS_COUNT - i === rating}
              onChange={handleInputChange}
            />
            <label htmlFor={`${STARS_COUNT - i}-stars`} className="reviews__rating-label form__rating-label">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={text}
        onChange={handleTextareaChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
