
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

export {
  AppRoute,
  PageModifier,
  MainModifier,
  AuthorizationStatus
};
