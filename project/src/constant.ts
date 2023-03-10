import pin from './assets/images/pin.svg';
import pinActive from './assets/images/pin-active.svg';

enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer'
}

enum PageModifier {
  Main = 'main',
  Login = 'login',
}

enum MainModifier {
  Index = 'index',
  Login = 'login',
  Favorites = 'favorites',
  Property = 'propery',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknow = 'UNKNOWN',
}

const MAX_PERCENT_STARS_WIDTH = 100;
const STARS_COUNT = 5;

const DEFAULT_MARKER = pin;
const CURRENT_MARKER = pinActive;


export {
  AppRoute,
  PageModifier,
  MainModifier,
  AuthorizationStatus,
  MAX_PERCENT_STARS_WIDTH,
  STARS_COUNT,
  DEFAULT_MARKER,
  CURRENT_MARKER
};
