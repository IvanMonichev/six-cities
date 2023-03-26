import { cities } from '../../constant';
import City from '../city/city';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CityName } from '../../types/city';
import { setCity } from '../../store/site-process/site-process';
import { getCity } from '../../store/site-process/selectors';
import { useCallback } from 'react';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getCity);

  const handleCityClick = useCallback((name: CityName) => {
    dispatch(setCity(name));
  }, [dispatch]);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City key={city} name={city} isActive={city === activeCity.name} onClick={handleCityClick} />
      ))}
    </ul>
  );
}

export default CitiesList;
