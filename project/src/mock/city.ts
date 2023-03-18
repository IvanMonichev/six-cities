import { City } from '../types/city';
import { cities, CityLocation } from '../constant';

export const city: City = {
  name: cities[0],
  location: CityLocation[cities[0]]
}
