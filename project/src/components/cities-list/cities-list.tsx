import { cities } from '../../constant';
import City from '../city/city';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CityName } from '../../types/city';
import { setCity } from '../../store/action';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.city);

  const handleCityClick = (name: CityName) => {
    dispatch(setCity(name));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City key={city} name={city} isActive={city === activeCity.name} onClick={handleCityClick} />
      ))}
    </ul>
  );
}

export default CitiesList;
