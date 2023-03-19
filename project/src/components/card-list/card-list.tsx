import Card from '../card/card';
import Map from '../map/map';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import SortingList from '../../sorting-list/sorting-list';
import { useDispatch } from 'react-redux';
import { setSorting } from '../../store/action';
import { SortName } from '../../types/common';
import { Comprator } from '../../constant';

function CardList(): JSX.Element {
  const dispatch = useDispatch();
  const activeCity = useAppSelector((state) => state.city);
  const activeSorting = useAppSelector((state) => state.sorting);

  // Получаем список предложений по активному состоянию города
  const offers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === state.city.name));

  // Сортируем список предложений по состоянию сортировки
  const sortedOffers = useAppSelector((state) => offers.sort(Comprator[state.sorting]));
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

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
        <SortingList onChange={onSortingChange} activeSorting={activeSorting} />
        <div className="cities__places-list places__list tabs__content">
          {sortedOffers.map((offer) => (
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
