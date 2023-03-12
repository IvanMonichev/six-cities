
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

enum UrlMarker {
  Default = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  Current = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
}

export {
  AppRoute,
  PageModifier,
  MainModifier,
  AuthorizationStatus,
  MAX_PERCENT_STARS_WIDTH,
  STARS_COUNT,
  UrlMarker
};
