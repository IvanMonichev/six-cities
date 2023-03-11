import { City } from './city';
import { Location } from './location';

type Host = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
}

export type Offer = {
  city: City;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
  description: string;
  location: Location;
  id: number;
}
