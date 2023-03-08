import { Offer } from '../../types/offer';
import Card from '../card/card';
import { useState } from 'react';

type CardListProps = {
  offers: Offer[];
};

function CardList({ offers }: CardListProps): JSX.Element {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleCardMouseMove = (id: number): void => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = (): void => {
    setActiveOffer(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          {...offer}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
}

export default CardList;
