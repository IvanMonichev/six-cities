import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, MainModifier, PageModifier } from '../../constant';
import { useAppSelector } from '../../hooks';

function Layout(): JSX.Element {
  const { pathname } = useLocation();
  const { offerId } = useParams();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  let pageModifier = '';
  let mainModifier: string;
  let isDisplayNav = false;
  let isDisplayFooter = false;
  let isNotGrayHeader = false;

  switch (pathname) {
    case AppRoute.Root:
      pageModifier = PageModifier.Main;
      mainModifier = MainModifier.Index;
      isDisplayNav = true;
      break;
    case AppRoute.Login:
      pageModifier = PageModifier.Login;
      mainModifier = MainModifier.Login;
      break;
    case AppRoute.Favorites:
      mainModifier = MainModifier.Favorites;
      isDisplayNav = true;
      isNotGrayHeader = true;
      isDisplayFooter = true;
      break;
    case `${AppRoute.Offer}/${offerId || ''}`:
      mainModifier = MainModifier.Property;
      isDisplayNav = true;
      isNotGrayHeader = true;
      break;
    default:
      mainModifier = 'not-found';
      pageModifier = 'not-found';
      isDisplayNav = false;
      isNotGrayHeader = true;
      isDisplayFooter = true;
  }

  return (
    <div className={`page ${isNotGrayHeader ? '' : 'page--gray'} page--${pageModifier}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            {
              isDisplayNav &&
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {isAuthorized && (
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      </Link>
                    </li>
                  )}
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.Login}>
                      <span className="header__signout">{isAuthorized ? 'Sign out' : 'Sign in'}</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            }
          </div>
        </div>
      </header>
      <main className={`page__main page__main--${mainModifier}`}>
        <Outlet />
      </main>
      {
        isDisplayFooter &&
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </a>
        </footer>
      }
    </div>
  );
}

export default Layout;
