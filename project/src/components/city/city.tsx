import { CityName } from '../../types/city';
import { memo } from 'react';

type CityProps = {
  name: CityName;
  isActive: boolean;
  onClick: (name: CityName) => void;
};

function City({ name, isActive, onClick }: CityProps): JSX.Element {
  const handelCityClick = () => {
    onClick(name);
  };

  return (
    <li className="locations__item" onClick={handelCityClick}>
      <div className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} tabIndex={0}>
        <span>{name}</span>
      </div>
    </li>
  );
}

export default memo(City);
