import { Offer } from '../../types/offer';
import { postFavorite } from '../../store/action';
import { useAppDispatch } from '../../hooks';

type BookmarkProps = {
  id: Offer['id'];
  isActive: boolean;
  place?: 'place-card' | 'property';
};

function Bookmark({ id, isActive, place = 'place-card' }: BookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleButtonClick = () => {
    dispatch(postFavorite({
      id,
      status: isActive ? 0 : 1
    }));
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`${place}__bookmark-button button${isActive ? ` ${place}__bookmark-button--active` : ''
      }`}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width={place === 'property' ? 31 : 18} height={place === 'property' ? 33 : 19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isActive ? 'From' : 'To'} bookmarks</span>
    </button>
  );
}

export default Bookmark;
