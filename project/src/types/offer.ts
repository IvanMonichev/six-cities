import { City } from './city';
import { Location } from './location';
import { User } from './user';

export type Offer = {
  id: number;
  price: number;
  rating: number;
  title: string;
  isPremium: boolean;
  isFavorite: boolean;
  city: City;
  location: Location;
  previewImage: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  bedrooms: number;
  description: string;
  goods: string[];
  host: User;
  images: [string];
  maxAdults: number;
}
