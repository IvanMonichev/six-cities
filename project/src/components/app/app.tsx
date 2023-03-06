import MainPage from '../../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constant';
import Layout from '../layout/layout';
import AuthPage from '../../pages/auth-page/auth-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Head from '../head/head';

type AppProps = {
  offersCount: number;
};

function App ({offersCount}: AppProps): JSX.Element {

  return(
    <BrowserRouter>
      <Head />
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout />}
        >
          <Route
            index
            element={
              <MainPage
                offersCount={offersCount}
              />
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <AuthPage />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={
              <OfferPage />
            }
          />
          <Route
            path="*"
            element={
              <NotFoundPage/>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
