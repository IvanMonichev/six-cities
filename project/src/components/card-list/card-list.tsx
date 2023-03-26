import Card from '../card/card';
import Map from '../map/map';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import SortingList from '../../sorting-list/sorting-list';
import { SortName } from '../../types/common';
import Spinner from '../spinner/spinner';
import { setSorting } from '../../store/site-process/site-process';
import { getIsOffersLoading, selectOffers } from '../../store/site-data/selectors';
import { getCity, getSorting } from '../../store/site-process/selectors';

function CardList(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeSorting = useAppSelector(getSorting);
  const activeCity = useAppSelector(getCity);
  const offers = useAppSelector(selectOffers);
  const isOffersLoading = useAppSelector(getIsOffersLoading);
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleCardMouseMove = (id: number): void => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = (): void => {
    setActiveOffer(null);
  };

  const onSortingChange = (name: SortName): void => {
    dispatch(setSorting(name));
  };

  if (isOffersLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
        <SortingList onChange={onSortingChange} activeSorting={activeSorting} />
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              {...offer}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              partClass="cities"
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map
          locations={offers.map(({ id, location}) => ({ id, ...location}))}
          city={activeCity}
          place="cities"
          activeOffer={activeOffer}
        />
      </div>
    </>
  );
}

export default CardList;
