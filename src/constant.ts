import pin from './assets/images/pin.svg';
import pinActive from './assets/images/pin-active.svg';
import { CityName } from './types/city';
import { Location } from './types/location';
import { SortName } from './types/common';
import { Offer } from './types/offer';

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const CityLocation: { [key in CityName]: Location } = {
  'Paris': {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  'Cologne': {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13
  },
  'Brussels': {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13
  },
  'Amsterdam': {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  },
  'Hamburg': {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13
  },
  'Dusseldorf': {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13
  },
};

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  // eslint-disable-next-line @typescript-eslint/no-shadow
  Offer = '/offer',
  NotFound = '/404'
}

export enum ApiRoute {
  Offers = '/hotels',
  Login = '/login',
  Comments = '/comments',
  Favorite = '/favorite',
  Logout = '/logout'
}

export enum PageModifier {
  Main = 'main',
  Login = 'login',
}

export enum MainModifier {
  Index = 'index',
  Login = 'login',
  Favorites = 'favorites',
  Property = 'propery',
}

export const MAX_COMMENTS = 10;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MAX_PERCENT_STARS_WIDTH = 100;
export const STARS_COUNT = 5;

export const DEFAULT_MARKER = pin;
export const CURRENT_MARKER = pinActive;

export enum Sorting {
  Popular = 'Popular',
  PriceIncrease = 'Price: low to high',
  PriceDecrease = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum SubmitStatus {
  Still = 'STILL',
  Pending = 'PENDING',
  Fullfilled = 'FULLFILLED',
  Rejected = 'REJECTED'
}

export const Comparator: {
  [key in SortName]: (a: Offer, b: Offer) => number
} = {
  Popular: () => 0,
  PriceIncrease: (a, b) => a.price - b.price,
  PriceDecrease: (a, b) => b.price - a.price,
  TopRated: (a, b) => b.rating - a.rating
};

export enum HttpCode {
  NotFound = 404,
  NoAuth = 401,
}

export enum StoreSlice {
  SiteData = 'SITE_DATA',
  SiteProcess = 'SITE_PROCESS',
  UserProcess = 'USER_PROCESS',
}

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
