import { Comment } from '../../types/comment';
import { formatDate, getStartsWidth } from '../../util';

function review({ user, rating, comment, date }: Comment): JSX.Element {
  const { name, avatarUrl } = user;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getStartsWidth(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={formatDate(date, 'YYYY-MM-DD')}>{formatDate(date, 'MMMM YYYY')}</time>
      </div>
    </li>
  );
}

export default review;
