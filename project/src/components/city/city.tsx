import { CityName } from '../../types/city';

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
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} href="#">
        <span>{name}</span>
      </a>
    </li>
  );
}

export default City;
