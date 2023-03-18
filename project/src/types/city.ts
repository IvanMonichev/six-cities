import { Location } from './location';
import { cities } from '../constant';

export type CityName = typeof cities[number];

export type City = {
  name: CityName;
  location: Location;
};
