import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { AppRoute, MainModifier, PageModifier } from '../../constant';

function Layout(): JSX.Element {
  const { pathname } = useLocation();
  const { id } = useParams();

  let pageModifier = '';
  let mainModifier = '';
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
    case `${AppRoute.Offer}/${id || ''}`:
      mainModifier = MainModifier.Property;
      isDisplayNav = true;
      isNotGrayHeader = true;
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
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
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
