import { Offer } from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offers: Offer[];
  onCardHover: (id: number | null) => void;
};

function CardList({ offers, onCardHover }: CardListProps): JSX.Element {

  const handleCardMouseMove = (id: number): void => {
    onCardHover(id);
  };

  const handleCardMouseLeave = (): void => {
    onCardHover(null);
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
