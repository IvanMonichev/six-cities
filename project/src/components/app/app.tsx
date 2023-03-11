import MainPage from '../../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constant';
import Layout from '../layout/layout';
import AuthPage from '../../pages/auth-page/auth-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import RoomPage from '../../pages/room-page/room-page';
import PrivateRoute from '../private-route/private-route';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Head from '../head/head';
import { Offer } from '../../types/offer';

type AppProps = {
  offers: Offer[];
};

function App ({ offers }: AppProps): JSX.Element {

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
                offers={offers}
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
            path={`${AppRoute.Offer}/:offerId`}
            element={
              <RoomPage
                offers={offers}
              />
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
