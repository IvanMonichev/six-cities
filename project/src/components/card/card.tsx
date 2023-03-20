import { Offer } from '../../types/offer';
import { AppRoute, MAX_PERCENT_STARS_WIDTH, STARS_COUNT } from '../../constant';
import { Link } from 'react-router-dom';
import { toUpperCaseFirstChar } from '../../util';

type CardProps = Offer & {
    onMouseMove?: (id: number) => void;
    onMouseLeave?: () => void;
    partClass: 'cities' | 'near-places';
};

function Card(props: CardProps): JSX.Element {
  const { id, price, rating, title, isPremium, isFavorite, previewImage, type } = props;
  const { onMouseMove, onMouseLeave } = props;
  const { partClass } = props;

  const handleMouseMove = (): void => {
    if (onMouseMove) {
      onMouseMove(id);
    }
  };

  return (
    <article
      className={`${partClass === 'cities' ? 'cities__place-card' : 'near-places__card' } place-card`}
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${partClass}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€ {price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button${isFavorite ? ' place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${MAX_PERCENT_STARS_WIDTH * rating / STARS_COUNT}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{toUpperCaseFirstChar(type)}</p>
      </div>
    </article>
  );
}

export default Card;
