import { Offer } from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offers: Offer[];
  onCardHover: (id: number | null) => void;
  partClass: 'cities' | 'near-places';
};

function CardList({ offers, onCardHover, partClass }: CardListProps): JSX.Element {

  const handleCardMouseMove = (id: number): void => {
    onCardHover(id);
  };

  const handleCardMouseLeave = (): void => {
    onCardHover(null);
  };

  return (
    <div
      className={
        `${partClass === 'cities'
          ? 'cities__places-list places__list tabs__content'
          : 'near-places__list places__list'}`
      }
    >
      {offers.map((offer) => (
        <Card
          key={offer.id}
          {...offer}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
          partClass={partClass}
        />
      ))}
    </div>
  );
}

export default CardList;
