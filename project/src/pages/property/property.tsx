import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import { useParams } from 'react-router-dom';
import { getStartsWidth, toUpperCaseFirstChar } from '../../util';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import { Comment } from '../../types/comment';
import { City } from '../../types/city';
import CardList from '../../components/card-list/card-list';
import { useState } from 'react';

type OfferPageProps = {
  offers: Offer[];
  city: City;
  reviews: Comment[];
}

function Property({ offers, city, reviews }: OfferPageProps): JSX.Element {
  const { offerId } = useParams();
  const offer = offers.find((element) => element.id === Number(offerId));

  const { price, rating, title, isPremium, type, images } = offer as Offer;

  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  const handleCardHover = (id: number | null): void => {
    setSelectedPoint(id);
  };

  return (
    <>
      <Helmet>
        <title>Property | 6 cities</title>
      </Helmet>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.slice(0, 6).map((image): JSX.Element => (
              <div key={image} className="property__image-wrapper">
                <img className="property__image" src={image} alt="Photo studio" />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && (
              <div className="property__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: getStartsWidth(rating)}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {toUpperCaseFirstChar(type)}
              </li>
              <li className="property__feature property__feature--bedrooms">
                3 Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max 4 adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                <li className="property__inside-item">
                  Wi-Fi
                </li>
                <li className="property__inside-item">
                  Washing machine
                </li>
                <li className="property__inside-item">
                  Towels
                </li>
                <li className="property__inside-item">
                  Heating
                </li>
                <li className="property__inside-item">
                  Coffee machine
                </li>
                <li className="property__inside-item">
                  Baby seat
                </li>
                <li className="property__inside-item">
                  Kitchen
                </li>
                <li className="property__inside-item">
                  Dishwasher
                </li>
                <li className="property__inside-item">
                  Cabel TV
                </li>
                <li className="property__inside-item">
                  Fridge
                </li>
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74"
                    height="74" alt="Host avatar"
                  />
                </div>
                <span className="property__user-name">
                Angelina
                </span>
                <span className="property__user-status">
                Pro
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The
                  building is green and from 18th century.
                </p>
                <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where
                  the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <ReviewList reviews={reviews} />
          </div>
        </div>
        <Map
          offers={offers.slice(0, 3)}
          city={city}
          selectedPoint={selectedPoint}
          place='property'
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <CardList offers={offers.slice(0, 3)} onCardHover={handleCardHover} partClass='near-places' />
        </section>
      </div>
    </>
  );
}

export default Property;
