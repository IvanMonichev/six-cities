import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers, getIsFavoriteOffersLoading } from '../../store/site-data/selectors';
import { Offer } from '../../types/offer';
import Spinner from '../../components/spinner/spinner';
import Card from '../../components/card/card';
import { Link } from 'react-router-dom';

function Favorites(): JSX.Element {
  const isFavoriteOffersLoading = useAppSelector(getIsFavoriteOffersLoading);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const groupedOffersByCity = favoriteOffers.reduce<{ [key: string]: Offer[] }>((acc, curr) => {
    if (curr.isFavorite) {
      const city = curr.city.name;

      if (!(city in acc)) {
        acc[city] = [];
      }

      acc[city].push(curr);
    }

    return acc;
  }, {});

  if (isFavoriteOffersLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Helmet>
        <title>Favorites | 6 cities</title>
      </Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(groupedOffersByCity).map(([city, groupedOffers]) => (
              <li className="favorites__locations-items" key={city}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to="/">
                      <span>{city}</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {groupedOffers.map((offer) => <Card key={offer.id} {...offer} partClass="favorites" />)}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Favorites;
