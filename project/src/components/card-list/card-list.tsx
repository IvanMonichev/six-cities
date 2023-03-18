import Card from '../card/card';
import Map from '../map/map';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import SortingList from '../../sorting-list/sorting-list';

function CardList(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);

  // Получаем список предложений по активному состоянию города
  const offers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === state.city.name));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  const handleCardMouseMove = (id: number): void => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = (): void => {
    setActiveOffer(null);
  };

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
        <SortingList />
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
          locations={offers.map((offer) => offer.location)}
          city={activeCity}
          place="cities"
        />
      </div>
    </>
  );
}

export default CardList;
