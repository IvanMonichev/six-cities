import { Location } from './location';
import { CITIES } from '../constant';

export type CityName = typeof CITIES[number];

export type City = {
  name: CityName;
  location: Location;
};
